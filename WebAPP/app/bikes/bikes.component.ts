/**
 * Created by Sander Verkaemer on 01/12/2016.
 */
import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { IBike} from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'bikes',
    templateUrl: 'bikes.component.html'
})

export class BikesComponent implements OnInit {

    bikes: IBike[] = [];
    amountOfBikes: number = this.bikes.length;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getAdminBikes()
            .subscribe((data: IBike[]) => this.bikes = data);
    }
}