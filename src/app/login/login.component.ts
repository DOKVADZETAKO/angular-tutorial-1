import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form;
  constructor(private userService: UsersService, private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      email: '',
      password: '',
    });
  }
  logIn() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };

    if (this.userService.logIn(user)) {
      this.router.navigate(['exchange']);
    }

    this.form.reset();
  }

  ngOnInit() {
  }
}