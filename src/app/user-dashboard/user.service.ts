import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { UserRegisterInterface } from "./models/user-register.interface";
import { UserResponseInterface } from "./models/user-response.interface";
import { Observable } from "rxjs";
import { UserLoginInterface } from "./models/user-login.interface";
import { UserSearchByNameInterface } from "./models/user-search-by-name.interface";

// API links
const MICRO_BLOG_API = 'http://localhost/api';
const API_USER_REGISTRATION = '/v1/user/register';
const API_ALL_USERS = '/v1/user';
const API_SIGN_IN = '/login';
const API_USER_BY_NAME = '/v1/user-by-name';
const API_USER_DELETE = '/delete';
const API_TRANSACTION_DETAILED_INFO = '/transaction-detailed-info';

@Injectable()
export class UserService {
    loggedUserId: number | null = null;
    bearerToken: string = '';

    constructor(
        private router: Router,
        private httpClient: HttpClient
    ) { }

    registration(signUpForm: UserRegisterInterface): Observable<UserResponseInterface> {
        let url = MICRO_BLOG_API + API_USER_REGISTRATION;

        return this.httpClient
            .post<UserResponseInterface>(url, signUpForm, this.getDefaultHttpRequestOptions());
    }

    signIn(signInForm: UserLoginInterface): Observable<UserResponseInterface> {
        let urlEnd = this.getUrlEnd(this.router.url);
        let url = MICRO_BLOG_API + API_SIGN_IN;

        return this.httpClient
            .put<UserResponseInterface>(url, signInForm, this.getDefaultHttpRequestOptions());
    }

    getAllUsers(): Observable<UserRegisterInterface[]> {
        return this.httpClient
            .get<UserRegisterInterface[]>(MICRO_BLOG_API + API_ALL_USERS);
    }

    getUserByUrlUserId(): Observable<UserResponseInterface> {
        let userId = this.getUrlEnd(this.router.url);
        let url = MICRO_BLOG_API + API_ALL_USERS + '/' + userId;

        return this.httpClient
            .get<UserResponseInterface>(url, this.getDefaultHttpRequestOptions());
    }

    getUserByName(searchForm: UserSearchByNameInterface): Observable<UserResponseInterface> {
        let url = MICRO_BLOG_API + API_USER_BY_NAME
            + '?firstName=' + searchForm.firstName
            + '&lastName=' + searchForm.lastName;
        
        return this.httpClient
            .get<UserResponseInterface>(url, this.getDefaultHttpRequestOptions());
    }

    deleteUser(): Observable<UserResponseInterface> {
        let url = MICRO_BLOG_API + API_USER_DELETE + '/' + this.loggedUserId;
        
        return this.httpClient
            .delete<UserResponseInterface>(url, this.getDefaultHttpRequestOptions());
    }

    private getUrlEnd(urlStr: string): string {
        let urlArr = urlStr.split("/") || [];

        return (urlArr[urlArr.length - 1] || '');
    }

    private getDefaultHttpRequestHeaders(): HttpHeaders {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        
        return headers;
    }

    private getDefaultHttpRequestOptions(): Object {
        let options = {
            "headers": this.getDefaultHttpRequestHeaders()
        };
        
        return options;
    }
}