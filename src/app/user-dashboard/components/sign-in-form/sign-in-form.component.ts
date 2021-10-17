import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { UserLoginInterface } from "../../models/user-login.interface";

@Component({
    selector: 'sign-in-form',
    styleUrls: ['sign-in-form.component.scss'],
    templateUrl: './sign-in-form.component.html'
})

export class SignInFormComponent implements OnInit {
    @Input()
    detail: UserLoginInterface;

    @Input()
    signInError: string = '';

    @Output()
    update: EventEmitter<UserLoginInterface> = new EventEmitter<UserLoginInterface>();

    constructor() {}

    
    ngOnInit() {
        this.detail = {
            email: '',
            password: ''
        };
        this.signInError = '';
    }

    handleSubmit(transaction: UserLoginInterface, isValid: boolean | null) {
        if (isValid) {
            this.update.emit(transaction);
        }
    }
}