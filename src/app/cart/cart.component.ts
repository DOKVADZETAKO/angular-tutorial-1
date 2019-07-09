import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
    items;
    checkedForm
    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder
    ) {
        this.items = this.cartService.getItems();

        this.checkedForm = formBuilder.group({
            name: ['', [Validators.minLength(4), this.forbiddenName()]],
            address: formBuilder.group({
                steet: '',
                city: '',
                state: '',
                zip: ''
            },
            {
                validators: this.crossValidation 
            })
        });

    };

    ngOnInit() { };

    crossValidation(formGroup){
        const zip = formGroup.get('zip').value;
        const zipStatus = CartComponent.isZipOk(zip);

        const city = formGroup.get('city').value;
        const cityStatus = CartComponent.isCityOk(city);



        return zipStatus && cityStatus ? null : {
            zipStatus,
            cityStatus
        };
    }

    static isZipOk(zip){
        return zip.length < 3;
    }

    static isCityOk(city){
        return city.charAt(0).toLowerCase() !== "a";
    }

    clearItem(product) {
        this.cartService.clearItem(product);
    }

    clearCart() {
        this.items = [];
    }

    onSubmit(value) {
        console.log(value);
        this.checkedForm.reset();
    }

    resetForm(){
        this.checkedForm.patchValue({
            name: ''
        });
    }

    forbiddenName(){
        return (formControl) => {
            return formControl.value === 'Roman' ? {forbidden: {invalid: true}} : null; 
        }
    }

    get name(){
        return this.checkedForm.get('name') as FormControl;
    }

    get address(){
        return this.checkedForm.get('address') as FormGroup;
    }
}