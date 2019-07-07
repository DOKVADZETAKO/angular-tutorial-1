import { Component, OnInit } from '@angular/core';

import { WishListService } from '../wishlist.service'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist;
  constructor(private wishListServise: WishListService) {
    this.wishlist = this.wishListServise.getWishlist();
  };

  ngOnInit() {
  }

    clearWishlist() {
    this.wishlist = [];
  }

  clearWish(productId) {
    this.wishListServise.clearWish(productId);
  }
}