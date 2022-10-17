import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit {
  products!: IProduct[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.showHomePage().subscribe((data) => {
      this.products = data;
    });
  }
}
