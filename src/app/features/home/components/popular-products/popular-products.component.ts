import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../../core/services/products.service';
import { Product } from '../../../../core/models/product';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-popular-products',
  imports: [CardComponent],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css'
})
export class PopularProductsComponent implements OnInit{
    private readonly productsService = inject(ProductsService)
  products: Product[] = [];

  getProducts(){
    this.productsService.getAllProducts().subscribe({
      next:(res)=>{
        this.products = res.data;
        console.log(this.products);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }
}
