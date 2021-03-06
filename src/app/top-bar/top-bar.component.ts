import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {
    constructor(private usersService: UsersService, private router: Router) { }
    ngOnInit() { }

    get isAuthorized() {
        return this.usersService.isAuthorized();
    }

    logOut() {
        this.usersService.logOut();
        this.router.navigate(['login']);
    }
}