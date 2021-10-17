import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd} from '@angular/router';

  
const URL_PATH_TITLES: { [key: string]: string } = {
  "transactions": "Transactions",
  "transaction-submit": "Transaction Submit",
  "registration": "Registration",
  "confirmation": "Confirmation",
  // "": "",
  // "": "",
  // "": "",
  // "": "",
  // "": ""
};

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'phone-validator-fe-ng-scss Rendering flow';
  currentUrl: string = '';
  currentUrlArr: Array<string> = [];
  breadCrumbHref: string = '';

  nav: Nav[] = [
    {
        "link": '/',
        "name": 'Home',
        "exact": true
    },
    {
        "link": '/transactions',
        "name": 'Transactions',
        "exact": true
    },
    {
        "link": '/user',
        "name": 'Users',
        "exact": true
    },
    // {
    //     "link": '/oops',
    //     "name": '404',
    //     "exact": false
    // },
  ];

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = (e.url || '').trim();
        this.currentUrlArr = this.currentUrl.split('/') || [];
      }
    });
  }

  ngOnInit() {
    this.resetBreadCrumbHref();
  }

  resetBreadCrumbHref(): void {
    this.breadCrumbHref = '';
  }

  getCurrentBreadCrumbHref(urlPart: string): string {
    this.breadCrumbHref += '/'+urlPart.trim();

    return this.breadCrumbHref;
  }

  getUrlPathTitle(urlPart: string): string {
    if (URL_PATH_TITLES.hasOwnProperty(urlPart)) {
      return URL_PATH_TITLES[urlPart];
    }

    return urlPart;
  }
}
