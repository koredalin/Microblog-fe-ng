import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UserDbInterface } from "../../models/user-db.interface";
import { UserSearchByNameInterface } from "../../models/user-search-by-name.interface";

@Component({
    selector: 'search-form',
    styleUrls: ['search-form.component.scss'],
   templateUrl: './search-form.component.html'
})

export class SearchFormComponent {
    @Input()
    detail: UserSearchByNameInterface;

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