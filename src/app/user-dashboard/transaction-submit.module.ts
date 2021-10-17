import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxMaskModule, IConfig } from "ngx-mask";

// Containers

// Components
import { TransactionSubmitComponent } from "./containers/transaction-submit/transaction-submit.component";
import { RegistrationComponent } from "./containers/registration/registration.component";
import { RegistrationFormComponent } from "./components/registration-form/registration-form.component";
import { ConfirmationComponent } from "./containers/confirmation/confirmation.component";
import { ConfirmationFormComponent } from "./components/confirmation-form/confirmation-form.component";
import { InfoComponent } from "./containers/info/info.component";
import { InfoFormComponent } from "./components/info-form/info-form.component";
import { InfoByIdComponent } from "./containers/info-by-id/info-by-id.component";
import { InfoViewerComponent } from "./components/info-viewer/info-viewer.component";

// Services
import { TransactionSubmitService } from "./transaction-submit.service";

const maskConfig: Partial<IConfig> = {
    validation: false
};

const routes = [
    {
        "path": 'transaction-submit',
        "children": [
            {
                path: '',
                component: TransactionSubmitComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent
            },
            {
                path: 'confirmation/:transactionId',
                component: ConfirmationComponent
            },
            {
                path: 'info',
                component: InfoComponent
            },
            {
                path: 'info/:transactionId',
                component: InfoByIdComponent
            },
            // {
            //     path: 'view/:id',
            //     component: TransactionViewerComponent
            // },
        ]
    }
];

@NgModule({
    declarations: [
        // Containers
        RegistrationComponent,
        ConfirmationComponent,
        InfoComponent,
        InfoByIdComponent,
        // Components
        // TransactionDetailComponent,
        RegistrationFormComponent,
        ConfirmationFormComponent,
        InfoFormComponent,
        InfoViewerComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        NgxMaskModule.forRoot(maskConfig),
        RouterModule.forChild(routes)
    ],
    providers: [
        TransactionSubmitService
    ]
})

export class TransactionSubmitModule {}