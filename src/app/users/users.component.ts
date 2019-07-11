import { Component, OnInit } from '@angular/core';
import {UsersService} from "./../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private usersServise: UsersService) {
    this.users = this.usersServise.getUsers();
  }

  ngOnInit() {
  }


  clearUsers() {
    this.users = [];
  }

}