import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  httpClient = inject(HttpClient);
  items: any[] = [];

  ngOnInit() {
    this.httpClient.get<any>('/api/items').subscribe((items) => {
      this.items = items;
    })
  }
}
