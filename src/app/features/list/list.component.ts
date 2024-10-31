import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ItemsService } from '../../shared/services/items.service';
import { Item } from '../../shared/models/item.interface';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './list.component.html',  
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items: Item[] = [];
  httpClient = inject(ItemsService);

  ngOnInit() {
    this.httpClient.getAllItems().subscribe((items) => {
      this.items = items;
    })
  }
}
