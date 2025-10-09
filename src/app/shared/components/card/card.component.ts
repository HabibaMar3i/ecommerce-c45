import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) product = { } as Product;
}
