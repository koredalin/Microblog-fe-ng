import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { UserService } from "../../user.service";
import { UserResponseInterface } from "../../models/user-response.interface";
import { UserUrls } from "../../user-urls";
import { UserLoginInterface } from "../../models/user-login.interface";

@Component({
    selector: 'sign-in',
    styleUrls: [],
    templateUrl: './sign-in.component.html'
})


export class SignInComponent implements OnInit, OnDestroy {
    signInForm: UserLoginInterface;
    signInError: string = '';
    private ngUnsubscribe = new Subject();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private transactionService: UserService
    ) {}
    

    ngOnInit() {
        this.signInForm = {
            email: '',
            password: ''
        };
        this.signInError = '';
    }

    onSignIn(event: UserLoginInterface) {
        this.transactionService
            .signIn(event)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (responseContent: UserResponseInterface) => {
                    console.log(responseContent);
                    this.router.navigate([UserUrls.HOME + UserUrls.VIEW + '/' + responseContent.response?.user_id || '']);
                    this.transactionService.loggedUserId = responseContent.response?.user_id || 0;
                    this.transactionService.bearerToken = 'Bearer ' + responseContent.response?.jwt || '';
                },
                (error) => {
                  this.signInError = error?.error?.arguments.errors || (JSON.stringify(error || 'UNKNOWN ERROR'));
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