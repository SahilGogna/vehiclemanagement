import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: ` 
    <router-outlet></router-outlet>
    `
})
export class AppComponent { 
    pageTitle:string='Vehicle List';
}
