import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxMaskModule, IConfig } from "ngx-mask";

// Containers

// Components
import { UserNavigationComponent } from "./containers/user-navigation/user-navigation.component";
import { RegistrationComponent } from "./containers/registration/registration.component";
import { SignUpFormComponent } from "./components/sign-up-form/sign-up-form.component";
import { SignInComponent } from "./containers/sign-in/sign-in.component";
import { ViewComponent } from "./containers/view/view.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { ViewByIdComponent } from "./containers/view-by-id/view-by-id.component";
import { UserDisplayComponent } from "./components/user-display/user-display.component";

// Services
import { UserService } from "./user.service";
import { SignInFormComponent } from "./components/sign-in-form/sign-in-form.component";

const maskConfig: Partial<IConfig> = {
    validation: false
};

const routes = [
    {
        "path": 'user',
        "children": [
            {
                path: '',
                component: UserNavigationComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent
            },
            {
                path: 'sign-in',
                component: SignInComponent
            },
            {
                path: 'view',
                component: ViewComponent
            },
            {
                path: 'view/:id',
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
        UserNavigationComponent,
        RegistrationComponent,
        SignInComponent,
        ViewComponent,
        ViewByIdComponent,
        // Components
        SearchFormComponent,
        SignUpFormComponent,
        SignInFormComponent,
        UserDisplayComponent
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