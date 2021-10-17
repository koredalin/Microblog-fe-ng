import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { TransactionSubmitService } from "../../transaction-submit.service";
import { UserRegistrationInterface } from "../../models/user-registration.interface";
import { ResponseInterface } from "../../models/response.interface";
import { UserUrls } from "../../user-urls.component";

@Component({
    selector: 'registration',
    styleUrls: [],
    templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit, OnDestroy {
    registration: UserRegistrationInterface;
    registrationError: string;
    private ngUnsubscribe = new Subject();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private transactionService: TransactionSubmitService
    ) {
    }
    

    ngOnInit() {
        this.registrationError = '';
    }

    onRegistration(event: UserRegistrationInterface) {
        this.transactionService
            .registration(event)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (responseContent: ResponseInterface) => {
                    this.router.navigate([UserUrls.HOME+UserUrls.LOGIN+'/'+(responseContent.response.transactionId || '')]);
                    //this.transaction = Object.assign({}, this.transaction, data);
                },
                (error) => {
                    this.registrationError = error?.error?.arguments.errors || (JSON.stringify(error || 'UNKNOWN ERROR'));
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