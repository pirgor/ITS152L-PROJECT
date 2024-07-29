import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {
  private apiUrl = 'https://localhost:7263/api/items'; // Make sure this matches your API route

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }
}

