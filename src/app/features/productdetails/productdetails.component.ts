import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productdetails',
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute)
  id: string | null = ''
  selectedImage: string | null = null;

  getParams() {
    this.activatedRoute.paramMap.subscribe(URLparams => {
      this.id = URLparams.get('id')
    })
  }

  private readonly productsService = inject(ProductsService)
  productDetails: Product | null = null
  getProductDetails() {
    this.productsService.getSpecificProduct(this.id as string).subscribe({
      next: (res) => {
        this.productDetails = res.data
      },
      error: (error) => {
        // handle error
      }
    })
  }

  changeImage(src: string) {
    this.selectedImage = src;
  }

  ngOnInit(): void {
    this.getParams()
    this.getProductDetails()
  }
}
