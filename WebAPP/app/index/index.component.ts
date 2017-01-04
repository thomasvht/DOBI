/**
 * Created by Sander Verkaemer on 08/12/2016.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'index',
    templateUrl: 'index.component.html'
})

export class IndexComponent{

    constructor(private router: Router) {}

    dashboard(){
        this.router.navigate(['/dashboard']);
    }

    register(){
        this.router.navigate(['/register']);
    }
}