/**
 * Created by Sander Verkaemer on 09/12/2016.
 */
import { Component } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { IMaintenance } from '../shared/interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'maintenance',
    templateUrl: 'maintenance.component.html'
})

export class MaintenanceComponent{
    id:string;
    mechanic:string;
    description:string;
    price:number;
    errorMessage:string;

    constructor(private dataService: DataService, private router:Router, private route: ActivatedRoute) {
    }

    addNewMaintenance(){
        if(this.mechanic && this.description && this.price){
            this.route.params.subscribe(params => { this.id = params['id'];});
            let maintenance: IMaintenance = {
                BikeId: this.id,
                Mechanic: this.mechanic,
                Description: this.description,
                Price:this.price
            };
            this.dataService.addNewMaintenance(maintenance)
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
        }else{
            this.errorMessage = "All fields are required";
        }
    }
}