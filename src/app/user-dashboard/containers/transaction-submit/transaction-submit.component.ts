import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserUrls } from "../../user-urls.component";
import { AppUrls } from "src/app/app-urls.component";

@Component({
    selector: 'transaction-submit',
    styleUrls: [],
    templateUrl: './transaction-submit.component.html'
})


export class TransactionSubmitComponent {
    constructor(
        private router: Router
    ) {}

    goToCreateTransaction() {
        this.router.navigate([UserUrls.HOME + UserUrls.REGISTRATION]);
    }

    goToTransactionInfo() {
        this.router.navigate([UserUrls.HOME + UserUrls.VIEW]);
    }

    // handleView(event: TransactionInterface) {
    //     this.router.navigate(['/transactions', event.id]);
    // }

    goBack() {
        this.router.navigate([AppUrls.TRANSACTIONS_HOME]);
    }
}