import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { UserService } from "../../user.service";
import { UserResponseInterface } from "../../models/user-response.interface";
import { UserEmptyModels } from "../../models/user-empty-models";
import { UserDbInterface } from "../../models/user-db.interface";

@Component({
    selector: 'view-by-id',
    styleUrls: [],
    templateUrl: './view-by-id.component.html'
})


export class ViewByIdComponent implements OnInit, OnDestroy {
    infoError: string = '';
    response: UserResponseInterface;
    emptyUserDbModel: UserDbInterface = UserEmptyModels.DB_INTERFACE;
    private ngUnsubscribe = new Subject();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService
    ) {}
    

    ngOnInit() {
        this.infoError = '';
        this.setInfo();
    }

    setInfo() {
        this.userService
            .getUserByUrlUserId()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (responseContent: UserResponseInterface) => {
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