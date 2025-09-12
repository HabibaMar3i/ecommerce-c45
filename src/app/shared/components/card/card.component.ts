import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) product = { } as Product;
}
