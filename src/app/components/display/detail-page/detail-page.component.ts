import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailPageComponent implements OnInit {
  product!: IProduct;
  categories!: any;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param['id']);
      this.productService.getDetail(param['id']).subscribe((data) => {
        this.product = data;
        this.categoryService
          .showRelationship(this.product.categoryId)
          .subscribe((item) => {
            this.categories = item;
            console.log(this.categories.products);
          });
      });
    });
  }
}
