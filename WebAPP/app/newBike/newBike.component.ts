/**
 * Created by Sander Verkaemer on 01/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
    moduleId: module.id,
    selector: 'newbike',
    templateUrl: 'newBike.component.html'
})

export class newBikeComponent{
    number: number;
    lockid: string;

    constructor(private dataService: DataService) {
    }

    addNewBike(){
        this.dataService.addNewBike(this.number,this.lockid)
            .subscribe((data: any[]) =>
                console.log(data)
            );
    }
}