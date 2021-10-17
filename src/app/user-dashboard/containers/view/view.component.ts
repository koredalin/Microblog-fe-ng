import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { UserService } from "../../user.service";
import { UserResponseInterface } from "../../models/user-response.interface";
import { UserUrls } from "../../user-urls.component";
import { UserSearchByNameInterface } from "../../models/user-search-by-name.interface";

@Component({
    selector: 'view',
    styleUrls: [],
    templateUrl: './view.component.html'
})

export class ViewComponent implements OnInit, OnDestroy {
    userData: UserSearchByNameInterface | null = null;
    infoError: string = '';
    response: UserResponseInterface | null = null;
    private ngUnsubscribe = new Subject();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {}
    

    ngOnInit() {
        this.infoError = '';
        this.response = null;
    }

    onGetInfo(event: UserSearchByNameInterface) {
        // this.userService
        //     .getTransaction(event)
        //     .pipe(takeUntil(this.ngUnsubscribe))
        //     .subscribe(
        //         (responseContent: UserResponseInterface) => {
        //             this.response = responseContent;
        //         },
        //         (error) => {
        //           this.infoError = error?.error?.arguments.errors || (JSON.stringify(error || 'UNKNOWN ERROR'));
        //         }
        //     );
    }

    goBack() {
        this.router.navigate([UserUrls.HOME]);
    }
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}