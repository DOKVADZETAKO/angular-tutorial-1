import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signUp',
    templateUrl: './signUp.component.html',
    styleUrls: ['./signUp.component.scss']
})
export class signUpComponent implements OnInit {
    checkedform;
    constructor(
        private formBuilder: FormBuilder
    ) {
        this.checkedform = formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            passwordGroup: formBuilder.group({
                password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ._-]+$/), Validators.minLength(7)]],
                confirmPassword: ['', Validators.required],
            }, {
                    validators: this.checkPasswords
                }),
            nickname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ._-]+$/)]],
            phoneNumber: ['', [Validators.required, Validators.pattern(/\+380[0-9]{9}$/)]],
            website: ['', Validators.required, Validators.pattern(/(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)],
            agreement: ['', Validators.required]
        })
    }

    checkPasswords(formGroup) {
        return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null : { incorrect: true };
    };

    get passwordGroup() {
        return this.checkedform.get('passwordGroup') as FormGroup;
    };


    get password() {
        return this.checkedform.get('passwordGroup').get('password') as FormControl;
    };

    get confirmPassword() {
        return this.checkedform.get('passwordGroup').get('confirmPassword') as FormControl;
    };

    get nickname() {
        return this.checkedform.get('nickname') as FormControl;
    };

    get phoneNumber() {
        return this.checkedform.get('phoneNumber') as FormControl;
    };

    get website() {
        return this.checkedform.get('website') as FormControl;
    };

    get agreement() {
        return this.checkedform.get('agreement') as FormControl;
    };

    get email() {
        return this.checkedform.get('email') as FormControl;
    };

    ngOnInit() {
    };

}