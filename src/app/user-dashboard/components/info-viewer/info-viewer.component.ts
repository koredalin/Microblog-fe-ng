import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ResponseInterface } from "../../models/response.interface";

@Component({
    selector: 'info-viewer',
    styleUrls: ['info-viewer.component.scss'],
    templateUrl: './info-viewer.component.html'
})

export class InfoViewerComponent {
    @Input()
    detail: ResponseInterface | null;

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