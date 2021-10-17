import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UserDbInterface } from "../../models/user-db.interface";
import { UserLoginInterface } from "../../models/user-login.interface";
import { UserSearchByNameInterface } from "../../models/user-search-by-name.interface";

@Component({
    selector: 'sign-in-form',
    styleUrls: ['sign-in-form.component.scss'],
   templateUrl: './sign-in-form.component.html'
})

export class SignInFormComponent {
    @Input()
    detail: UserLoginInterface;

    @Input()
    infoError: string = '';

    @Output()
    update: EventEmitter<UserSearchByNameInterface> = new EventEmitter<UserSearchByNameInterface>();

    constructor() {}

    handleSubmit(transaction: UserSearchByNameInterface, isValid: boolean | null) {
        if (isValid) {
            this.update.emit(transaction);
        }
    }
}