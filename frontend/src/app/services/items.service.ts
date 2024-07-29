import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://localhost:7095/api/Item/';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "Items");
  }

  addItem(item: Item): Observable<string> {
    return this.http.post(this.apiUrl + 'addItem/', item, { responseType: 'text' });
  }
  
  updateItem(item: Item): Observable<string> {
    return this.http.put(this.apiUrl + 'updateItem', item, { responseType: 'text' });
  }

  getProductById(id: number): Observable<Item> {
    return this.http.get<Item>(this.apiUrl + id);
  }

  deleteProductById(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }
}