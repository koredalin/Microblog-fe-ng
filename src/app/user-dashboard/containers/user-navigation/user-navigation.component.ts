import { Component } from "@angular/core";
import { UserUrls } from "../../user-urls";
import { AppUrls } from "src/app/app-urls.component";

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

    constructor() {}
}