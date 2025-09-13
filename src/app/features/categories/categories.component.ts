import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Category } from '../../core/models/category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  private readonly categoriesService = inject(CategoriesService);
  categories: Category[] = [];

  getBrands(): void {
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


  ngOnInit(): void {
    this.getBrands();
  }
}
