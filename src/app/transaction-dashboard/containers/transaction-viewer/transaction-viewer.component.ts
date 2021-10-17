import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, ActivatedRouteSnapshot } from "@angular/router";
import { TransactionDashboardService } from "../../transaction-dashboard.service";
import { TransactionInterface } from "../../models/transaction.interface";

@Component({
    selector: 'transaction-viewer',
    styleUrls: [],
    templateUrl: './transaction-viewer.component.html'
})


export class TransactionViewerComponent implements OnInit {
    transaction: TransactionInterface;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private transactionService: TransactionDashboardService
    ) {}

    ngOnInit() {
        this.route.params.subscribe((data: Params) => {
            this.transactionService
                .getTransaction(data.id)
                .subscribe((data: TransactionInterface) => this.transaction = data);
        });
    }

    goBack() {
        this.router.navigate(['/transactions']);
    }
}