import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Item } from '../models/item.interface';
import { ItemPayload } from '../models/item-payload.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  httpClient = inject(HttpClient);
  items: any[] = [];

  getAllItems() {
    return this.httpClient.get<Item[]>('/api/items');
  }

  postItem(payload: ItemPayload) {
    return this.httpClient.post<ItemPayload>('/api/items', payload);
  }
}
