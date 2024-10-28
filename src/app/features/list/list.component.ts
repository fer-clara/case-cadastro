import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ItemsService } from '../../shared/services/items.service';
import { Item } from '../../shared/models/item.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, MatCardModule, MatButtonModule],
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
