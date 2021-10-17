import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ConfirmationCodeInterface } from "../../models/confirmation-code.interface";

@Component({
    selector: 'confirmation-form',
    styleUrls: ['confirmation-form.component.scss'],
   templateUrl: './confirmation-form.component.html'
})

export class ConfirmationFormComponent {
    @Input()
    detail: ConfirmationCodeInterface;

    @Input()
    confirmationError: string = '';

    @Output()
    update: EventEmitter<ConfirmationCodeInterface> = new EventEmitter<ConfirmationCodeInterface>();

    constructor() {}

    handleSubmit(codeConfirmation: ConfirmationCodeInterface, isValid: boolean | null) {
        if (isValid) {
            this.update.emit(codeConfirmation);
        }
    }
}