import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UserDbInterface } from "../../models/user-db.interface";

@Component({
    selector: 'user-display',
    styleUrls: ['user-display.component.scss'],
    templateUrl: './user-display.component.html'
})

export class UserDisplayComponent {
    @Input()
    detail: UserDbInterface;

    // @Output()
    // update: EventEmitter<TransactionInfoInterface> = new EventEmitter<TransactionInfoInterface>();

    constructor() {}

    // handleSubmit(transaction: TransactionInfoInterface, isValid: boolean | null) {
    //     if (isValid) {
    //         this.update.emit(transaction);
    //     }
    // }
}