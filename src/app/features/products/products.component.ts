import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
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
