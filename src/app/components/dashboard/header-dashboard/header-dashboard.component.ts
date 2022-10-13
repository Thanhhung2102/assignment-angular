import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss'],
})
export class HeaderDashboardComponent implements OnInit {
  products!: IProduct[];
  filterValue: string = '';
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  filter() {
    this.products = this.products.filter((item) =>
      item.name.includes(this.filterValue)
    );
    console.log(this.products);
  }
}
