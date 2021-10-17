import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { UserSearchByNameInterface } from "../../models/user-search-by-name.interface";

@Component({
    selector: 'search-form',
    styleUrls: ['search-form.component.scss'],
    templateUrl: './search-form.component.html'
})

export class SearchFormComponent implements OnInit {
    @Input()
    detail: UserSearchByNameInterface;

    @Input()
    searchError: string = '';

    @Output()
    update: EventEmitter<UserSearchByNameInterface> = new EventEmitter<UserSearchByNameInterface>();

    constructor() {}

    
    ngOnInit() {
        this.detail = {
            firstName: '',
            lastName: ''
        };
        this.searchError = '';
    }

    handleSubmit(transaction: UserSearchByNameInterface, isValid: boolean | null) {
        if (isValid) {
            this.update.emit(transaction);
        }
    }
}