import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss'],
})
export class CategoryUpdateComponent implements OnInit {
  category!: ICategory;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.categoryService.getCategory(param['id']).subscribe((item) => {
        this.category = item;
      });
    });
  }

  onHandleUpdate() {
    this.categoryService.updateCategory(this.category).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Update category successful',
        showConfirmButton: false,
        timer: 800,
      });
      this.router.navigateByUrl('/admin/categories');
    });
  }
}
