import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ItemsService } from '../../shared/services/items.service';
import { Item } from '../../shared/models/item.interface';
import { CardComponent } from './card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',  
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items: Item[] = [];
  httpClient = inject(ItemsService);

  router = inject(Router);

  ngOnInit() {
    this.httpClient.getAllItems().subscribe((items) => {
      this.items = items;
    })
  }

  onEdit() {
    this.router.navigateByUrl('/editar');
  }
}
