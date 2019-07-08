import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'app-signUp',
    templateUrl: './signUp.component.html',
    styleUrls: ['./signUp.component.scss']
})

export class signUpComponent implements OnInit {
    checkedForm
    constructor(
        private formBuilder: FormBuilder
    ) {
        this.checkedForm = formBuilder.group({
            signUp: formBuilder.group({
                email: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                  ])),
                password: ['',Validators.required],
                confirmPassword: ['',Validators.required],
                nickname: ['',Validators.required],
                phoneNumber:['',Validators.required],
                website: ['',Validators.required]
            },{
              //  validators: this.crossValidation
            })
        });

    };

    ngOnInit() { };

    onSubmit(value) {
        console.log(value);
        this.checkedForm.reset();
    }

    // crossValidation(formGroup){
    //     const email = formGroup.get('email').value;
    //     const emailStatus = signUpComponent.isEmailOk(email);

    //     return emailStatus ? null : {
    //         emailStatus
    //     };
    // }

    // static isEmailOk(email){
    //     return email.charAt(0) !== "a"
    // }

    get email(){
        return this.checkedForm.get('email') as FormControl;
    }

    get password(){
        return this.checkedForm.get('password') as FormControl;
    }


}