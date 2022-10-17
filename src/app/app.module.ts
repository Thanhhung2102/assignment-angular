import { NgModule, LOCALE_ID } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderDashboardComponent } from './components/dashboard/header-dashboard/header-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarDashboardComponent } from './components/dashboard/sidebar-dashboard/sidebar-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/display/home-page/home-page.component';
import { HeaderComponent } from './components/display/header/header.component';
import { FooterComponent } from './components/display/footer/footer.component';
import { ProductListComponent } from './components/dashboard/product-list/product-list.component';
import { ProductAddComponent } from './components/dashboard/product-add/product-add.component';
import { ProductUpdateComponent } from './components/dashboard/product-update/product-update.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DetailPageComponent } from './components/display/detail-page/detail-page.component';
import { CategoryListComponent } from './components/dashboard/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/dashboard/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/dashboard/category/category-update/category-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDashboardComponent,
    SidebarDashboardComponent,
    DashboardComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    LoginComponent,
    RegisterComponent,
    DetailPageComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
