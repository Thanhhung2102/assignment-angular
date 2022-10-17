import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }
}
