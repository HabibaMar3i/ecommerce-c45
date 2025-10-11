import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../core/models/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { OnSalePipe } from '../../pipes/on-sale-pipe';
import { TrimTextPipe } from '../../pipes/trim-text-pipe';
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-card',
  imports: [RouterLink, CurrencyPipe, OnSalePipe, TrimTextPipe],
templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) product = { } as Product;

  private readonly _CartService = inject(CartService)

  addProductToCart(productId:string){
    this._CartService.addToCart(productId).subscribe({
      next:((res)=>{
        console.log(res);
      }),
      error:((err)=>{
        console.log(err);
      })
    })
  }
}
