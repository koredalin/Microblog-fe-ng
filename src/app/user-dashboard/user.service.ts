import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { UserRegisterInterface } from "./models/user-register.interface";
import { ConfirmationCodeInterface } from "./models/confirmation-code.interface";
import { TransactionInfoInterface } from "./models/transaction-info.interface";
import { UserResponseInterface } from "./models/user-response.interface";
import { Observable } from "rxjs";

// API links
const MICRO_BLOG_API = 'http://localhost/api';
const API_USER_REGISTRATION = '/v1/user/register';
const API_ALL_USERS = '/v1/user';
const API_CODE_CONFIRMATION = '/confirmation';
const API_CODE_CONFIRMATION_RESET = '/reset-code';
const API_TRANSACTION_INFO = '/transaction-info';
const API_TRANSACTION_DETAILED_INFO = '/transaction-detailed-info';

@Injectable()
export class UserService {
    constructor(
        private router: Router,
        private httpClient: HttpClient
    ) { }

    getTransactions(): Observable<UserRegisterInterface[]> {
        return this.httpClient
            .get<UserRegisterInterface[]>(MICRO_BLOG_API + API_ALL_USERS);
    }

    registration(transaction: UserRegisterInterface): Observable<UserResponseInterface> {
        let url = MICRO_BLOG_API + API_USER_REGISTRATION;

        return this.httpClient
            .post<UserResponseInterface>(url, transaction, this.getDefaultHttpRequestOptions());
    }

    confirmation(codeConfirmation: ConfirmationCodeInterface): Observable<UserResponseInterface> {
        let urlEnd = this.getUrlEnd(this.router.url);
        let url = MICRO_BLOG_API + API_CODE_CONFIRMATION + '/' + urlEnd;

        return this.httpClient
            .post<UserResponseInterface>(url, codeConfirmation, this.getDefaultHttpRequestOptions());
    }

    reset(): Observable<UserResponseInterface> {
        let transactionId = this.getUrlEnd(this.router.url);
        let url = MICRO_BLOG_API + API_CODE_CONFIRMATION_RESET + '/' + transactionId;

        return this.httpClient
            .get<UserResponseInterface>(url, this.getDefaultHttpRequestOptions());
    }

    getTransaction(transactionInfo: TransactionInfoInterface): Observable<UserResponseInterface> {
        let url = MICRO_BLOG_API + API_TRANSACTION_INFO + '/' + transactionInfo.transactionId;
        
        return this.httpClient
            .get<UserResponseInterface>(url, this.getDefaultHttpRequestOptions());
    }

    getTransactionDetailedInfo(transactionInfo: TransactionInfoInterface): Observable<UserResponseInterface> {
        let url = MICRO_BLOG_API + API_TRANSACTION_DETAILED_INFO + '/' + transactionInfo.transactionId;
        
        return this.httpClient
            .post<UserResponseInterface>(url, transactionInfo, this.getDefaultHttpRequestOptions());
    }

    getUserByUrlUserId(): Observable<UserResponseInterface> {
        let userId = this.getUrlEnd(this.router.url);
        let url = MICRO_BLOG_API + API_ALL_USERS + '/' + userId;

        return this.httpClient
            .get<UserResponseInterface>(url, this.getDefaultHttpRequestOptions());
    }

    public getCountries(): Observable<any> {
        return this.httpClient.get("./../../assets/nomenclatures/countries.json");
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