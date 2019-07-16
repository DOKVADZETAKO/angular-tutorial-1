import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items = [];
   // wishlist = []
    constructor() { }

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    clearItem(product) {
        this.items.splice(this.items.indexOf(product), 1);
    }

}