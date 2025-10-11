import { Component, inject, OnInit } from '@angular/core';
import { CartService } from './../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private readonly _CartService = inject(CartService)
;

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this._CartService.getUserCart().subscribe({
      next: (res) => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
