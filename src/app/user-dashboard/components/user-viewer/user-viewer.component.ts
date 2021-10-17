import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UserResponseInterface } from "../../models/user-response.interface";

@Component({
    selector: 'user-viewer',
    styleUrls: ['user-viewer.component.scss'],
    templateUrl: './user-viewer.component.html'
})

export class InfoViewerComponent {
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