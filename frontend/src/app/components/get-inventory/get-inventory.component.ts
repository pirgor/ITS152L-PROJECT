import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/items.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-inventory',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './get-inventory.component.html',
  styleUrl: './get-inventory.component.css'
})

export class GetInventoryComponent implements OnInit {
  private routeSub: Subscription = new Subscription();
  private id: number = 0;
  item: Item = {
    id: 0,
    name: '',
    code: '',
    brand: '',
    unitPrice: 0
  };

  items?: Item[] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private ItemService: ItemService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  initData(): void {
    this.ItemService.getItems().subscribe({
      next: (data: Item[]) => {
        this.items = data;
        console.log(this.items);
      },
      error: (err) => {
        console.error('Error fetching items:', err);
      }
    });
  }

  addItem(): void {
    this.ItemService.addItem(this.item).subscribe({
      next: (response: string) => {
        console.log('Message:', response);
        if (response === 'Item added successfully.') {
          window.alert("Item has been added");
          this.item = { id: 0, name: '', code: '', brand: '', unitPrice: 0 };
          this.initData();
        }
      },
      error: (err) => {
        console.error('Error adding item:', err);
      }
    });
  }

  updateItem(): void {
    this.ItemService.updateItem(this.item).subscribe({
      next: (response: string) => {
        console.log('Message:', response);
        if (response === 'Item updated successfully.') {
          window.alert("Item has been updated");
          this.item = { id: this.id, name: '', code: '', brand: '', unitPrice: 0 };
          this.initData();
        }
      },
      error: (err) => {
        console.error('Error updating item:', err);
      }
    });
  }

  getProductById(id: number): void {
    this.ItemService.getProductById(id).subscribe({
      next: (data: Item) => {
        this.item = data;
        console.log(this.item);
        this.id = id;
      },
      error: (err) => {
        console.error('Error fetching item:', err);
        window.alert("The specified item could not be found.");
      }
    });
  }

  deleteProductById(id: number): void {
    this.ItemService.deleteProductById(id).subscribe({
      next: () => {
        console.log(`Item ID: ${id} has been deleted.`);
        window.alert("The Item has been deleted successfully.");
        this.item = { id: this.id, name: '', code: '', brand: '', unitPrice: 0 };
        this.initData();
      },
      error: (err) => {
        console.error('Error deleting item:', err);
      }
    });
  }

}
