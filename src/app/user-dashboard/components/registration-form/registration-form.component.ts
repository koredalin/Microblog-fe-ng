import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { UserRegistrationInterface } from "../../models/user-registration.interface";

@Component({
    selector: 'registration-form',
    styleUrls: ['registration-form.component.scss'],
    templateUrl: './registration-form.component.html'
})

export class RegistrationFormComponent implements OnInit {
    @Input()
    detail: UserRegistrationInterface;
    @Input()
    registrationError: string = '';

    @Output()
    update: EventEmitter<UserRegistrationInterface> = new EventEmitter<UserRegistrationInterface>();

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

    handleSubmit(transaction: UserRegistrationInterface, isValid: boolean | null) {
        if (isValid) {
            this.update.emit(transaction);
        }
    }
}