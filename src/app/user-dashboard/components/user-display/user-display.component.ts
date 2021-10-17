import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UserResponseInterface } from "../../models/user-response.interface";

@Component({
    selector: 'user-display',
    styleUrls: ['user-display.component.scss'],
    templateUrl: './user-display.component.html'
})

export class InfoDisplayComponent {
    @Input()
    detail: UserResponseInterface | null;

    @Input()
    infoError: string = '';

    // @Output()
    // update: EventEmitter<TransactionInfoInterface> = new EventEmitter<TransactionInfoInterface>();

    constructor() {}

    // handleSubmit(transaction: TransactionInfoInterface, isValid: boolean | null) {
    //     if (isValid) {
    //         this.update.emit(transaction);
    //     }
    // }
}