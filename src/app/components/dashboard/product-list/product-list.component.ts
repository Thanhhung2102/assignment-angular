import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: IProduct[];
  category!: ICategory[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.categoryService.getCategories().subscribe((category) => {
      this.category = category;
    });
  }

  removeProduct(id: number) {
    Swal.fire({
      title: 'Are you sure delete it?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.removeProduct(id).subscribe(() => {
          this.products = this.products.filter((item) => item.id !== id);
        });
      }
    });
  }
}
