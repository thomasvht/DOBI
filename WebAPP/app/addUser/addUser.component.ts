/**
 * Created by Sander Verkaemer on 16/12/2016.
 */
import { Component } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'addUser',
    templateUrl: 'addUser.component.html'
})

export class addUserComponent{
    email:string;
    id:string;

    errorMessage:string = "";

    constructor(private dataService: DataService, private router:Router, private route: ActivatedRoute) {
    }

    addUser(){
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        if(this.id && this.email){
            this.dataService.addUser(this.id, this.email)
                .subscribe((result: any) => {
                        if (result) {
                            if(result.error){
                                this.errorMessage = result.error;
                            }else {
                                this.router.navigate(['/detail/'+this.id]);
                            }
                        }
                    }
                );
        }else {
            this.errorMessage = "All fields are required";
        }


    }
}