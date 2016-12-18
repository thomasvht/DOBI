/**
 * Created by Sander Verkaemer on 09/12/2016.
 */
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
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

    maintenances: IMaintenance[];

    constructor(private dataService: DataService,private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.dataService.getBikeById(params['id'])
                .subscribe((data: IBike) =>{
                        this.number = data.Number;
                        this.user = data.User.firstname + " " + data.User.name;
                        this.email = data.User.email;
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
}

