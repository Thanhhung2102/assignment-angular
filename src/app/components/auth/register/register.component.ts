import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: IUser = {
    email: '',
    password: '',
    phone: '',
    role: 0,
  };
  // registerForm = new FormGroup({
  //   email: new FormGroup(''),
  //   password: new FormGroup(''),
  //   phone: new FormGroup(''),
  //   role: new FormGroup(0),
  // });
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  formSignup() {
    this.authService.signup(this.user).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registration successful account',
        showConfirmButton: false,
        timer: 800,
      });
      this.router.navigateByUrl('/signin');
    });
  }
}
