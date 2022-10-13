import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
