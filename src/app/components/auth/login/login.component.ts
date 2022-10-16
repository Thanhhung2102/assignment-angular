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
  emailLogin = '';
  passwordLogin = '';
  user!: IUser;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
}
