import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'any' }) 
export class UserAuthDataService {
  loggedUserId: number | null = null;
  bearerToken: string = '';
}