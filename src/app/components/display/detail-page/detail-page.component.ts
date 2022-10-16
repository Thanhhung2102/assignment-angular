import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailPageComponent implements OnInit {
  product!: IProduct;
  products!: IProduct[];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param['id']);
      this.productService.getDetail(param['id']).subscribe((data) => {
        this.product = data;
      });
    });

    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
