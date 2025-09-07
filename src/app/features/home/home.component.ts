import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

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
