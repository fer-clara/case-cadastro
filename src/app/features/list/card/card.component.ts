import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, input, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Item } from '../../../shared/models/item.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatExpansionModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  readonly panelOpenState = signal(false);
  @Output() edit = new EventEmitter();

  item = input.required<Item>();

  itemTitle = computed(() => this.item().nome);
  itemUnidadeDeMedida = computed(() => this.item().unidadeDeMedida);
  itemQuantidade = computed(() => this.item().quantidade);
  itemPreco = computed(() => this.item().preco);
  itemPerecivel = computed(() => this.item().perecivel);
  itemDataDeValidade = computed(() => this.item().dataDeValidade);
  itemDataDeFabricacao = computed(() => this.item().dataDeFabricacao);

  
}
