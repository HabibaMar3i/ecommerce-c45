import { Component } from '@angular/core';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';

@Component({
  selector: 'app-home',
  imports: [PopularProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

}
