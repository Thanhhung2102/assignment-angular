import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss'],
})
export class CategoryAddComponent implements OnInit {
  category: ICategory = {
    id: 0,
    name: '',
  };
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {}

  onHandleAdd() {
    this.categoryService.addCategory(this.category).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Add category successful',
        showConfirmButton: false,
        timer: 800,
      });
      this.router.navigateByUrl('/admin/categories');
    });
  }
}
