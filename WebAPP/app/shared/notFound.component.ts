/**
 * Created by Sander Verkaemer on 02/01/2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'notFound',
    template: `
        <div class="col-lg-12 header-containter full">
            <!--<img src="../../images/notFound.jpg" class="img-responsive header-img">-->
            <div class="caption post-content">
                <h1 class="header-title notFound-text">Page not found!</h1>
                <h3 (click)="return()" class="notFound-link">Go back to the homepage</h3>
            </div>
        </div>
`
})

export class notFoundComponent{

    constructor(private router: Router) {}

    return(){
        this.router.navigate(['/']);
    }

}