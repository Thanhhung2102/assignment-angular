import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderDashboardComponent } from './components/dashboard/header-dashboard/header-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarDashboardComponent } from './components/dashboard/sidebar-dashboard/sidebar-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDashboardComponent,
    SidebarDashboardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
