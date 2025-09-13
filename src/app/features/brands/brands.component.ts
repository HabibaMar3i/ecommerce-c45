import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Brand } from '../../core/models/brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {
  private readonly brandsService = inject(BrandsService);
  brands: Brand[] = [];

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandsService.getAllBrands().subscribe({
      next: (res) => {
        console.log(res);
        this.brands = res.data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}

