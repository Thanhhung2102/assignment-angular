import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    img: '',
    price: 0,
    description: '',
  };
  selectFile = '';
  constructor(
    private httpClient: HttpClient,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  changeFile(event: any) {
    this.selectFile = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.selectFile);
    formData.append('upload_preset', 'hungtt13998');
    this.httpClient
      .post(`https://api.cloudinary.com/v1_1/hungtt/image/upload`, formData)
      .subscribe((event: any) => {
        console.log(event.url);
        this.product.img = event.url;
      });
  }
  onHandleAdd() {
    this.productService.addProduct(this.product).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Add product successful',
        showConfirmButton: false,
        timer: 1000,
      });
      this.router.navigateByUrl('/admin');
    });
  }
}
