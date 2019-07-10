import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(private shippingService: ShippingService) {
    this.shippingCosts = shippingService.getShippingCosts();
  }

  ngOnInit() {
  }

  get selectedShipping() {
    return this.shippingService.gettype();
  }

  selectShipping(value) {
    this.shippingService.setShipping(value)
  }

}
