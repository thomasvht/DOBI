/**
 * Created by Sander Verkaemer on 01/12/2016.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ILogin } from '../shared/interfaces';
import { UserService } from '../shared/services/user.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    email:string;
    password:string;

    errorMessage:string;

    constructor(private userService: UserService, private router: Router) {}

    login() {
        let user : ILogin = {
            Email: this.email,
            Password: this.password,
        };
        this.userService.login(user).subscribe((result) => {
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