import { Component, inject, OnInit } from '@angular/core';
import { Brand } from '../../../../core/models/brand';
import { BrandsService } from '../../../../core/services/brands.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brands-slider',
  imports: [CarouselModule],
  templateUrl: './brands-slider.component.html',
  styleUrl: './brands-slider.component.css'
})
export class BrandsSliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
  
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

