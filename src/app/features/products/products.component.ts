import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product';
import { CardComponent } from '../../shared/components/card/card.component';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-products',
  imports: [CardComponent, NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private readonly productsService = inject(ProductsService)
  products: Product[] = [];
  pageSize!: number;
  p! : number;
  total!: number;

  getProducts(pageNumber:number = 1){
    this.productsService.getAllProducts(pageNumber).subscribe({
      next:(res)=>{
        this.products = res.data;
        console.log(this.products);
        this.pageSize = res.metadata.limit
        this.p = res.metadata.currentPage
        this.total = res.results
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
