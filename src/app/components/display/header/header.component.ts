import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userExist = localStorage.getItem('user');
  getInfoUser = JSON.parse(localStorage.getItem('user') || '{}');
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('user');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigateByUrl('/');
  }
}
