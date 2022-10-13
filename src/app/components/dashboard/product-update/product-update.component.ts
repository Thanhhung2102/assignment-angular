import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  product!: IProduct;
  selectFile = '';
  constructor(
    private httpClient: HttpClient,
    private productService: ProductService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((param) => {
      this.productService.getDetail(param['id']).subscribe((data) => {
        this.product = data;
      });
    });
  }

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

  onHandleUpdate() {
    this.productService.updateProduct(this.product).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Update product successful',
        showConfirmButton: false,
        timer: 800,
      });
      this.router.navigateByUrl('/admin');
    });
  }
}
