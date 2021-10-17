import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { UserRegisterInterface } from "./models/user-register.interface";
import { UserResponseInterface } from "./models/user-response.interface";
import { Observable } from "rxjs";
import { UserLoginInterface } from "./models/user-login.interface";
import { UserSearchByNameInterface } from "./models/user-search-by-name.interface";

// API links
const MICRO_BLOG_API = 'http://localhost/microblog/public/api';
const API_USERS = '/v1/user';
const API_USER_REGISTRATION = API_USERS + '/v1/user/register';
const API_SIGN_IN = API_USERS + '/login';
const API_USER_BY_NAME = API_USERS + '/v1/user-by-name';
const API_USER_DELETE = API_USERS;

@Injectable()
export class UserService implements OnInit{
    loggedUserId: number | null = null;
    bearerToken: string = '';

    constructor(
        private router: Router,
        private httpClient: HttpClient
    ) {
        this.loggedUserId = parseInt(localStorage.getItem('loggedUserId') || '0');
        this.bearerToken = localStorage.getItem('bearerToken') || '';
    }

    ngOnInit() {
    }

    registration(signUpForm: UserRegisterInterface): Observable<UserResponseInterface> {
        let url = MICRO_BLOG_API + API_USER_REGISTRATION;

        return this.httpClient
            .post<UserResponseInterface>(url, signUpForm, this.getDefaultHttpRequestOptions());
    }

    signIn(signInForm: UserLoginInterface): Observable<UserResponseInterface> {
        let urlEnd = this.getUrlEnd(this.router.url);
        let url = MICRO_BLOG_API + API_SIGN_IN;

        return this.httpClient
            .post<UserResponseInterface>(url, signInForm, this.getDefaultHttpRequestOptions());
    }

    getAllUsers(): Observable<UserResponseInterface> {
        return this.httpClient
            .get<UserResponseInterface>(MICRO_BLOG_API + API_USERS, this.getDefaultHttpRequestOptions());
    }

    getUserByUrlUserId(): Observable<UserResponseInterface> {
        let userId = this.getUrlEnd(this.router.url);
        let url = MICRO_BLOG_API + API_USERS + '/' + userId;

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

    setLoggedInUserId(id: number | null) {
        this.loggedUserId = id;
    }

    setBearerToken(token: string) {
        this.bearerToken = token;
    }

    private getUrlEnd(urlStr: string): string {
        let urlArr = urlStr.split("/") || [];

        return (urlArr[urlArr.length - 1] || '');
    }

    private getDefaultHttpRequestHeaders(): HttpHeaders {
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": this.bearerToken
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