/**
 * Created by Sander Verkaemer on 07/12/2016.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
    moduleId: module.id,
    selector: 'header',
    template: `
        <nav class="navbar navbar-default navbar-fixed-top nav-bar">
            <div class="container-fluid col-lg-8 col-lg-offset-2">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="dashboard">Lock'D</a>
                </div>
        
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="nav-link">Link</li>
                        <li class="nav-link" (click)="logout()">Logout</li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
`
})

export class HeaderComponent{

    constructor(private userService: UserService, private router: Router) {}

    logout(){
        this.userService.logout();
        this.router.navigate(['/']);
    }
}