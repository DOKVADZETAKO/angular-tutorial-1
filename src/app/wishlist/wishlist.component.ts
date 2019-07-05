import { Component, OnInit } from '@angular/core';

import { WishListService } from '../wishlist.service'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist;
  constructor(private wishlistService: WishListService) {
    this.wishlist = this.wishlistService.getWishlist();
  };

  ngOnInit() {
  }

  clearWishlist() {
    this.wishlist = [];
  }
  clearAll() {
    this.wishlist = [];
  }
}