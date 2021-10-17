import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PostDashboardService } from "../../post-dashboard.service";
import { UserUrls } from "src/app/user-dashboard/user-urls";

@Component({
    selector: 'post-dashboard',
    styleUrls: [],
    templateUrl: './post-dashboard.component.html'
})


export class PostDashboardComponent implements OnInit {
    links = {
        userHome: UserUrls.HOME
    };

    constructor(
        private router: Router,
        private transactionService: PostDashboardService
    ) {
        console.log('Post start.');
    }

    ngOnInit() {
        // this.transactionService
        //     .getTransactions()
        //     .subscribe((responseData: TransactionInterface[]) => this.transactions = responseData);
    }
}