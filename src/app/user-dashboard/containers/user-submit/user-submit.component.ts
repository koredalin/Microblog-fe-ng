import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserUrls } from "../../user-urls.component";
import { AppUrls } from "src/app/app-urls.component";

@Component({
    selector: 'user-submit',
    styleUrls: [],
    templateUrl: './user-submit.component.html'
})


export class TransactionSubmitComponent {
    constructor(
        private router: Router
    ) {}

    goToUserCreate() {
        this.router.navigate([UserUrls.HOME + UserUrls.REGISTRATION]);
    }

    goToUserView() {
        this.router.navigate([UserUrls.HOME + UserUrls.VIEW]);
    }

    // handleView(event: TransactionInterface) {
    //     this.router.navigate(['/transactions', event.id]);
    // }

    goBack() {
        this.router.navigate([AppUrls.TRANSACTIONS_HOME]);
    }
}