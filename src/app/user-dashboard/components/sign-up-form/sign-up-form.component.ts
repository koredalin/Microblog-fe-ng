import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { UserRegisterInterface } from "../../models/user-register.interface";

@Component({
    selector: 'sign-up-form',
    styleUrls: ['sign-up-form.component.scss'],
    templateUrl: './sign-up-form.component.html'
})

export class SignUpFormComponent implements OnInit {
    @Input()
    detail: UserRegisterInterface;
    @Input()
    registrationError: string = '';

    @Output()
    update: EventEmitter<UserRegisterInterface> = new EventEmitter<UserRegisterInterface>();

    phoneNumberMask: string = '';

    constructor() {}

    
    ngOnInit() {
        this.detail = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        this.registrationError = '';
    }

    handleSubmit(transaction: UserRegisterInterface, isValid: boolean | null) {
        if (isValid) {
            this.update.emit(transaction);
        }
    }
}