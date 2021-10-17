import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `
        <div>
            Not found route
            <a routerLink="/" routerLinkActive="active">Go home</a>?
        </div>
    `
})

export class NotFoundComponent {}