import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductAddComponent } from './components/dashboard/product-add/product-add.component';
import { ProductListComponent } from './components/dashboard/product-list/product-list.component';
import { ProductUpdateComponent } from './components/dashboard/product-update/product-update.component';
import { HomePageComponent } from './components/display/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProductListComponent },
      { path: 'add', component: ProductAddComponent },
      // { path: ':id', component: ProductUpdateComponent },
      { path: ':id/update', component: ProductUpdateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
