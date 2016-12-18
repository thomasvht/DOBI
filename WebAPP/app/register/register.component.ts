/**
 * Created by Sander Verkaemer on 01/12/2016.
 */
import { Component } from '@angular/core';

import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
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

    errorMessage:string;

    constructor(private userService: UserService, private router: Router) {}

    register() {
        if(this.password != this.passwordRepeat){
            this.errorMessage = "Passwords are not the same!";
        }else{
            let user : IUser = {
                Firstname: this.firstname,
                Name: this.name,
                Email: this.email,
                Password: this.password,
            };
            this.userService.register(user).subscribe((result) => {
                if (result) {
                    if(result.error){
                        this.errorMessage = result.error;
                    }else {
                        this.router.navigate(['/dashboard']);
                    }
                }
            });
        }
    }
}
