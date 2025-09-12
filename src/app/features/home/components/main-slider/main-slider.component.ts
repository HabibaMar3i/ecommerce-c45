import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css'
})
export class MainSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    nav: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      }
    }
  }
}
