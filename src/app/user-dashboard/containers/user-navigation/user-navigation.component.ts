import { Component } from "@angular/core";
import { UserUrls } from "../../user-urls";
import { AppUrls } from "src/app/app-urls.component";
import { Router } from "@angular/router";
import { UserService } from "../../user.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { UserResponseInterface } from "../../models/user-response.interface";

@Component({
    selector: 'user-navigation',
    styleUrls: [],
    templateUrl: './user-navigation.component.html'
})


export class UserNavigationComponent {
    registrationUrl: string = UserUrls.HOME + UserUrls.REGISTRATION;
    userLoginUrl: string = UserUrls.HOME + UserUrls.LOGIN;
    userSearchUrl: string = UserUrls.HOME + UserUrls.SEARCH;
    goBackUrl: string = AppUrls.HOME;
    private ngUnsubscribe = new Subject();
    deleteError: string = '';
    loggedUserId: number | null = null;

    constructor(
        private router: Router,
        private userService: UserService
    ) {
        this.loggedUserId = parseInt(localStorage.getItem('loggedUserId') || '0');
    }
    

    deleteUser() {
        if (confirm('You and your posts will be deleted. Are you sure?!?')) {
            this.userService
                .deleteUser()
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe(
                    (responseContent: UserResponseInterface) => {
                        localStorage.setItem('loggedUserId', '0');
                        localStorage.setItem('bearerToken', '');
                        this.router.navigate([UserUrls.HOME]);
                    },
                    (error) => {
                    this.deleteError = error?.error?.arguments.errors || (JSON.stringify(error || 'UNKNOWN ERROR'));
                    }
                );
        }
    }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}