import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WishListService {
    wishlist = [];

    constructor(private http: HttpClient) { }

    addToWishlist(product) {
        this.wishlist.push(product);
    }

    getWishlist() {
        return this.wishlist;
    }

    clearCart() {
        this.wishlist = [];
        return this.wishlist;
    }

}