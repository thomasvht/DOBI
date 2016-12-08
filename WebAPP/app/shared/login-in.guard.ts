/**
 * Created by Sander Verkaemer on 08/12/2016.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private user: UserService) {}

    canActivate() {
        console.log("isLoggedIn(): ",this.user.isLoggedIn());
        return this.user.isLoggedIn();
    }
}