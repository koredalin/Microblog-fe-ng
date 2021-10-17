import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class PostDashboardService {
    constructor(private httpClient: HttpClient) {}
}