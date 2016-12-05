/**
 * Created by Sander Verkaemer on 01/12/2016.
 */
import { Component } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { ILogin } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    email:string;
    password:string;

    constructor(private dataService: DataService) {
    }

    login() {
        let user : ILogin = {
            email: this.email,
            password: this.password,
        };
        this.dataService.login(user);
    }
}