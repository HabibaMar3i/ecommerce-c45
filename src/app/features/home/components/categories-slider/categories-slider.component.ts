import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../../../../core/models/category';
import { CategoriesService } from '../../../../core/services/categories.service';

@Component({
  selector: 'app-categories-slider',
  imports: [CarouselModule],
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.css'
})
export class CategoriesSliderComponent implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: ['<', '>'],
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
    nav: true
  }

  private readonly categoriesService = inject(CategoriesService);
  categories: Category[] = [];

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
