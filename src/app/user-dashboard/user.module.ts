import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxMaskModule, IConfig } from "ngx-mask";

// Containers

// Components
import { TransactionSubmitComponent } from "./containers/user-submit/user-submit.component";
import { RegistrationComponent } from "./containers/registration/registration.component";
import { SignUpFormComponent } from "./components/sign-up-form/sign-up-form.component";
import { ConfirmationComponent } from "./containers/confirmation/confirmation.component";
import { ConfirmationFormComponent } from "./components/confirmation-form/confirmation-form.component";
import { ViewComponent } from "./containers/view/view.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { ViewByIdComponent } from "./containers/view-by-id/view-by-id.component";
import { InfoDisplayComponent } from "./components/user-display/user-display.component";

// Services
import { UserService } from "./user.service";

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
                component: ViewComponent
            },
            {
                path: 'info/:transactionId',
                component: ViewByIdComponent
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
        ViewComponent,
        ViewByIdComponent,
        // Components
        // TransactionDetailComponent,
        SignUpFormComponent,
        ConfirmationFormComponent,
        SearchFormComponent,
        InfoDisplayComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        NgxMaskModule.forRoot(maskConfig),
        RouterModule.forChild(routes)
    ],
    providers: [
        UserService
    ]
})

export class UserModule {}