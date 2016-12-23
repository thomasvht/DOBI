/**
 * Created by Sander Verkaemer on 09/12/2016.
 */
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { IBike, IMaintenance} from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit{
    number:number;
    user:string;
    email:string;
    id:string;
    inMaintenance:boolean;

    location:string;

    url:string;

    maintenances: IMaintenance[];

    constructor(private dataService: DataService,private router: Router,private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.dataService.getBikeById(params['id'])
                .subscribe((data: IBike) =>{
                        if(!data.Number) this.router.navigate(['/dashboard']);
                        this.number = data.Number;
                        this.location = data.LastLocation;
                        this.url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDIc_mfhGjEsnx-cKk7HglcHFGVCHL1x28&zoom=16&q="+this.location;
                    if(!data.User){
                            this.user = "No user";
                            this.email = "";
                        }else{
                            this.user = data.User.Firstname + " " + data.User.Name;
                            this.email = data.User.Email;
                        }
                        this.inMaintenance = data.inMaintenance;
                    }
                );

            this.dataService.getMaintenances(params['id'])
                .subscribe((data: IMaintenance[]) =>{
                        this.maintenances = data;
                    }
                );
        });
    }

    toggleMaintenance(){
        this.dataService.toggleMaintenance(this.id)
            .subscribe((data : any) =>{

        });
    }

    deleteUser(){
        this.dataService.removeUser(this.id)
            .subscribe((data : any) =>{
                if(data.message){
                    this.user = "No user";
                    this.email = "";
                }
            });
    }
}

