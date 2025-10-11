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

  updateProduct(productCount:number, productId:string) {
    this._CartService.updateProductQuantity(productCount, productId).subscribe({
      next: ((res) => {
        console.log(res);
      }),
      error: ((err) => {
        console.log(err);
      })
    })
  }

  removeProduct(productId:string) {
    this._CartService.deleteProduct(productId).subscribe({
      next: ((res) => {
        console.log(res);
      }),
      error: ((err) => {
        console.log(err);
      })
    })
  }

  deleteCart() {
    this._CartService.clearCart().subscribe({
      next: ((res) => {
        console.log(res);
        this.getCart();
      }),
      error: ((err) => {
        console.log(err);
      })
    })
  }
}
