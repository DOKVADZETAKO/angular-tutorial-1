import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
    selector: 'app-task-1',
    templateUrl: './task-1.component.html',
    styleUrls: ['./task-1.component.scss']
})

export class task1Component implements OnInit {
    checkedForm
    constructor(
        private formBuilder: FormBuilder
    ) {
        this.checkedForm = formBuilder.group({
            task1: formBuilder.group({
                email: '',
                password: [Number, Validators.minLength(7)],
                confirmPassword: '',
                nickname: '',
                phoneNumber: Number,
                website: '',
            })
        });

    };

    ngOnInit() { };

}