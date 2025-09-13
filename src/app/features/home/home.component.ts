import { Component } from '@angular/core';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';
import { CategoriesSliderComponent } from './components/categories-slider/categories-slider.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { BrandsSliderComponent } from "./components/brands-slider/brands-slider.component";

@Component({
  selector: 'app-home',
  imports: [PopularProductsComponent, CategoriesSliderComponent, MainSliderComponent, BrandsSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

}
