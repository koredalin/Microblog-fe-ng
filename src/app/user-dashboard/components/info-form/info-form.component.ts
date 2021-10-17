import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TransactionInfoInterface } from "../../models/transaction-info.interface";

@Component({
    selector: 'info-form',
    styleUrls: ['info-form.component.scss'],
   templateUrl: './info-form.component.html'
})

export class InfoFormComponent {
    @Input()
    detail: TransactionInfoInterface;

    @Input()
    infoError: string = '';

    @Output()
    update: EventEmitter<TransactionInfoInterface> = new EventEmitter<TransactionInfoInterface>();

    constructor() {}

    handleSubmit(transaction: TransactionInfoInterface, isValid: boolean | null) {
        if (isValid) {
            this.update.emit(transaction);
        }
    }
}