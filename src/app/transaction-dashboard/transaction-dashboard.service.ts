import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TransactionInterface } from "./models/transaction.interface";
import { Observable } from "rxjs";


const TRANSACTION_API = 'http://localhost:3000/transactions';

@Injectable()
export class TransactionDashboardService {
    constructor(private httpClient: HttpClient) {}

    getTransactions(): Observable<TransactionInterface[]> {
        return this.httpClient
            .get<TransactionInterface[]>(TRANSACTION_API);
    }

    createTransaction(transaction: TransactionInterface): Observable<TransactionInterface> {
        let url = TRANSACTION_API;
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        let options = {
            "headers": headers
        };
        
        return this.httpClient
            .post<TransactionInterface>(url, transaction, options);
    }

    getTransaction(id: number): Observable<TransactionInterface> {
        let url = TRANSACTION_API+'/'+id;
        return this.httpClient
            .get<TransactionInterface>(url);
    }

    updateTransaction(transaction: TransactionInterface): Observable<TransactionInterface> {
        let url = TRANSACTION_API+'/'+transaction.id;
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        let options = {
            "headers": headers
        };
        
        return this.httpClient
            .put<TransactionInterface>(url, transaction, options);
    }
}