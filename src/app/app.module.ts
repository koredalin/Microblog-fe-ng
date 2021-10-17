import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { TransactionDashboardModule } from './transaction-dashboard/transaction-dashboard.module'
import { TransactionSubmitModule } from './transaction-submit/transaction-submit.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    // AppRoutingModule
    RouterModule.forRoot(routes),
    // Custom modules
    TransactionDashboardModule,
    TransactionSubmitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
