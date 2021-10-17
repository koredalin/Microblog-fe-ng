import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TransactionInterface } from "../../models/transaction.interface";
import { TransactionDashboardService } from "../../transaction-dashboard.service";
import { UserUrls } from "src/app/user-dashboard/user-urls";

@Component({
    selector: 'transaction-dashboard',
    styleUrls: [],
    templateUrl: './transaction-dashboard.component.html'
})


export class TransactionDashboardComponent implements OnInit {
    transactions: TransactionInterface[] = [];
    links = {
        userHome: UserUrls.HOME
    };

    constructor(
        private router: Router,
        private transactionService: TransactionDashboardService
    ) {}

    ngOnInit() {
        // this.transactionService
        //     .getTransactions()
        //     .subscribe((responseData: TransactionInterface[]) => this.transactions = responseData);
    }

    // handleEdit(event: TransactionInterface) {
    //     this.router.navigate(['/transactions/edit', event.id]);
    // }

    // handleView(event: TransactionInterface) {
    //     this.router.navigate(['/transactions', event.id]);
    // }
}