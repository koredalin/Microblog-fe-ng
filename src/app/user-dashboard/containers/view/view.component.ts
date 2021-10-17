import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { UserService } from "../../user.service";
import { UserResponseInterface } from "../../models/user-response.interface";
import { UserUrls } from "../../user-urls";
import { UserSearchByNameInterface } from "../../models/user-search-by-name.interface";

const VIEW_ALL_USERS = 'view-all-users';
const SEARCH_BY_USER_NAME = 'search_by_user_name';

@Component({
    selector: 'view',
    styleUrls: [],
    templateUrl: './view.component.html'
})

export class ViewComponent implements OnInit, OnDestroy {
    userData: UserSearchByNameInterface;
    searchError: string = '';
    response: UserResponseInterface;
    private ngUnsubscribe = new Subject();
    action: string = VIEW_ALL_USERS;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {}
    

    ngOnInit() {
        this.searchError = '';
        this.response = {
            response: {},
            arguments: {}
        };
    }

    viewAllUsers() {
        this.ngOnInit();
        this.action = VIEW_ALL_USERS;
        this.userService
            .getAllUsers()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (responseContent: UserResponseInterface) => {
                    this.response = responseContent;
                },
                (error) => {
                  this.searchError = error?.error?.arguments.errors || (JSON.stringify(error || 'UNKNOWN ERROR'));
                }
            );
    }

    searchByUserName() {
        this.ngOnInit();
        this.action = SEARCH_BY_USER_NAME;
    }

    onGetInfo(event: UserSearchByNameInterface) {
        this.userService
            .getUserByName(event)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (responseContent: UserResponseInterface) => {
                    this.response = responseContent;
                },
                (error) => {
                  this.searchError = error?.error?.arguments.errors || (JSON.stringify(error || 'UNKNOWN ERROR'));
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