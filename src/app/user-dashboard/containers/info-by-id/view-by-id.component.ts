import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { TransactionSubmitService } from "../../transaction-submit.service";
import { TransactionInfoInterface } from "../../models/transaction-info.interface";
import { UserResponseInterface } from "../../models/user-response.interface";

@Component({
    selector: 'view-by-id',
    styleUrls: [],
    templateUrl: './view-by-id.component.html'
})


export class ViewByIdComponent implements OnInit, OnDestroy {
    infoError: string;
    response: UserResponseInterface | null;
    private ngUnsubscribe = new Subject();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private transactionService: TransactionSubmitService
    ) {}
    

    ngOnInit() {
        this.infoError = '';
        this.response = null;
        this.setInfo();
    }

    setInfo() {
        this.transactionService
            .getTransactionByUrlTransactionId()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (responseContent: UserResponseInterface) => {
                    console.log(responseContent);
                    this.response = responseContent;
                },
                (error) => {
                  this.infoError = error?.error?.arguments.errors || (JSON.stringify(error || 'UNKNOWN ERROR'));
                }
            );
    }

    goBack() {
        this.router.navigate(['/transactions']);
    }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}