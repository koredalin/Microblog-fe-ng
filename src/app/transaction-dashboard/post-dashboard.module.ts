import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// Containers
import { PostDashboardComponent } from "./containers/post-dashboard/post-dashboard.component";

// Components

// Services
import { PostDashboardService } from "./post-dashboard.service";

const routes = [
    {
        "path": 'post',
        "children": [
            {
                path: '',
                component: PostDashboardComponent
            },
        ]
    }
];

@NgModule({
    declarations: [
        // Containers
        PostDashboardComponent,

        // Components
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        PostDashboardService
    ]
})

export class PostDashboardModule {}