/**
 * Created by Sander Verkaemer on 01/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'newbike',
    templateUrl: 'newBike.component.html'
})

export class newBikeComponent{
    number: number;
    lockid: string;
    unlockCode:string
    errorMessage:string;

    constructor(private dataService: DataService, private router: Router) {
    }

    addNewBike(){
        if(this.number && this.lockid && this.unlockCode){
            this.dataService.addNewBike(this.number,this.lockid, this.unlockCode)
                .subscribe((result: any) => {
                        if (result) {
                            if(result.error){
                                this.errorMessage = result.error;
                            }else {
                                this.router.navigate(['/dashboard']);
                            }
                        }
                    }
                );
        }else{
            this.errorMessage = "All fields are required";
        }
    }
}