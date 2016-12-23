/**
 * Created by Sander Verkaemer on 01/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { IBike} from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    bikes: IBike[] = [];
    amountOfBikes: number;
    noUsers:number = 0;
    amountOfInMaintenance:number = 0;

    constructor(private dataService: DataService, private router: Router) {
    }

    ngOnInit(){
        this.dataService.getBikesByOwner()
            .subscribe((data: IBike[]) =>{
                this.bikes = data;
                this.amountOfBikes = this.bikes.length;
                for(let i=0;i<this.bikes.length; i++){
                    if(!this.bikes[i].User){
                        this.noUsers++;
                    }
                    if(this.bikes[i].inMaintenance == true){
                        this.amountOfInMaintenance++;
                    }
                }
            }
        );
    }

    getDetail(id:string){
        this.router.navigate(['/detail/'+id]);
    }
}