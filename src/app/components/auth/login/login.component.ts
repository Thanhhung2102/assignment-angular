import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: IUser = {
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 0,
  };
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  signinForm() {
    this.authService.signin(this.user).subscribe((data: any) => {
      this.user.name = data.user.name;
      this.user.phone = data.user.phone;
      this.user.role = data.user.role;
      localStorage.setItem('user', JSON.stringify(this.user));

      if (JSON.parse(localStorage.getItem('user') || '{}').role == 1) {
        this.router.navigateByUrl('/admin');
      } else this.router.navigateByUrl('/');
    });
  }
}
