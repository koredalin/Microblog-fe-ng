import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { TransactionSubmitService } from "../../transaction-submit.service";
import { ConfirmationCodeInterface } from "../../models/confirmation-code.interface";
import { ResponseInterface } from "../../models/response.interface";
import { UserUrls } from "../../user-urls.component";

@Component({
    selector: 'confirmation',
    styleUrls: [],
    templateUrl: './confirmation.component.html'
})


export class ConfirmationComponent implements OnInit, OnDestroy {
    codeConfirmation: ConfirmationCodeInterface;
    confirmationError: string;
    resetError: string;
    resetSuccess: boolean | null;
    private ngUnsubscribe = new Subject();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private transactionService: TransactionSubmitService
    ) {}
    

    ngOnInit() {
        this.confirmationError = '';
        this.resetSuccess = null;
        this.resetError = '';
    }

    onCodeConfirmation(event: ConfirmationCodeInterface) {
        this.transactionService
            .confirmation(event)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (responseContent: ResponseInterface) => {
                    console.log(responseContent);
                    if (responseContent.response.transactionStatus === 'confirmed') {
                        this.router.navigate([UserUrls.HOME + UserUrls.VIEW + '/' + responseContent.response?.transactionId || '']);
                    } else {
                        this.confirmationError = responseContent.response.error || '';
                    }
                },
                (error) => {
                  this.confirmationError = error?.error?.arguments.errors || (JSON.stringify(error || 'UNKNOWN ERROR'));
                }
            );
    }

    resetCode() {
        this.transactionService
            .reset()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (responseContent: ResponseInterface) => {
                    if (responseContent.response.transactionStatus === 'confirmed') {
                        this.confirmationError = responseContent.response.error || '';
                    } else {
                        this.resetSuccess = true;
                    }
                },
                (error) => {
                this.confirmationError = error?.error?.arguments.errors || (JSON.stringify(error || 'UNKNOWN ERROR'));
                }
            );
    }

    goBack() {
        this.router.navigate([UserUrls.HOME]);
    }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}