import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from "./../user.service";
@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ["./forms.component.scss"]
})

export class formsComponent implements OnInit {
    register;


    constructor(

        private formBuilder: FormBuilder,
        private userService: UsersService
    ) {


        this.register = formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.minLength(8), Validators.required, Validators.pattern(/[\w0-9]{8,}/)]],
            confPassword: ['', [Validators.minLength(8), Validators.required, Validators.pattern(/[\w0-9]{8,}/)]],

        },
            {
                validators: this.MustMatch
            });
    }


    // passwordCheck(passwrd){
    //     var letterNumber = /^[0-9a-zA-Z]+$/;
    //     return passwrd.value.match(letterNumber);
    // }

    // static isPassOk(passwrd){
    //     var letterNumber = /^[0-9a-zA-Z]+$/;
    //     return passwrd.value.match(letterNumber)? true : null;

    // }

    MustMatch(password) {
        if (password.get('password').value !== password.get('confPassword').value) {
            return { invalid: true };
        }
    }

    onSubmit(value) {

        this.userService.addToUsers(value);

    }

    ngOnInit() { }

}
