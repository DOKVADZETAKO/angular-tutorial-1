import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    // static GetUsers() {

    // }
    
    authorized = false;
    authorizedUser = null;


    constructor() { }

    usersList = [];

    addToUsers(user) {
        this.usersList.push(user);
    }

    getUsers() {

        return this.usersList;
    }

    public logIn(user) {
        const userExists = this.usersList.find((item) => {
            return item.email === user.email && item.password === user.password;
        });

        if (userExists) {
            this.authorized = true;
            this.authorizedUser = userExists;

            return true;
        }

        return false;
    }

    logOut() {
        this.authorized = false;
        this.authorizedUser = null;
    }

    isAuthorized() {
        return this.authorized;
    }

    getAuthUser() {
        return this.authorizedUser;
    }
}
