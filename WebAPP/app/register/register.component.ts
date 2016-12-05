/**
 * Created by Sander Verkaemer on 01/12/2016.
 */
import { Component } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { IUser } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    firstname:string;
    name:string;
    email:string;
    password:string;
    passwordRepeat:string;

    warningMessage:string;

    constructor(private dataService: DataService) {
    }

    register() {
        if(this.password != this.passwordRepeat){
            this.warningMessage = "Passwords are not the same!";
        }else{
            let user : IUser = {
                firstname: this.firstname,
                name: this.name,
                email: this.email,
                password: this.password,
            };
            this.dataService.register(user);
        }
    }
}
