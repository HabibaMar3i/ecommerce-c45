import { Component, inject, OnInit } from '@angular/core';
import { CartService } from './../../core/services/cart.service';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private readonly _CartService = inject(CartService);
  cart!: Product[]
  cartItemsNo!: number
  cartTotal!: number
  productId!: string
  productCount!: number

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this._CartService.getUserCart().subscribe({
      next: (res) => {
        this.cartItemsNo = res.numOfCartItems
        this.cart = res.data.products
        this.cartTotal = res.data.totalCartPrice
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updateProduct() {
    this._CartService.updateProductQuantity(this.productCount, this.productId).subscribe({
      next: ((res) => {
        console.log(res);
      }),
      error: ((err) => {
        console.log(err);
      })
    })
  }
}
