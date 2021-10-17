import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserUrls } from "../../user-urls";
import { AppUrls } from "src/app/app-urls.component";

@Component({
    selector: 'user-navigation',
    styleUrls: [],
    templateUrl: './user-navigation.component.html'
})


export class UserNavigationComponent {
    constructor(
        private router: Router
    ) {}

    goToUserCreate() {
        this.router.navigate([UserUrls.HOME + UserUrls.REGISTRATION]);
    }

    goToUserLogin() {
        this.router.navigate([UserUrls.HOME + UserUrls.LOGIN]);
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