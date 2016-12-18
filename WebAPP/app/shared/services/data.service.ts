import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {IBike, IMaintenance} from '../interfaces';

@Injectable()
export class DataService {

    constructor (private http: Http) {}

    getBikesByOwner() : Observable<IBike[]>{
        return this.http.get('http://localhost:5000/api/bike/byOwner/'+ ReadUserFromLocalStorage(), GenerateHeaders())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    addNewBike(number:number,lockid:string,unlockCode:string) : any{
        let body = {
            "Number":number,
            "LockId":lockid,
            "Owner": ReadUserFromLocalStorage(),
            "UnlockCode":unlockCode
        };

        return this.http.post('http://localhost:5000/api/bike/add/', body, GenerateHeaders())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    getBikeById(id:string): any{
        return this.http.get('http://localhost:5000/api/bike/single/'+id, GenerateHeaders())
            .map((resp:Response) => resp.json())
            .catch(this.handleError);
    }

    addNewMaintenance(maintenance: IMaintenance) : any{
        return this.http.post('http://localhost:5000/api/maintenance/add/', maintenance, GenerateHeaders())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    getMaintenances(id:string) : Observable<IMaintenance[]>{
        return this.http.get('http://localhost:5000/api/maintenance/'+id, GenerateHeaders())
            .map((resp:Response) => resp.json())
            .catch(this.handleError);
    }

    toggleMaintenance(id:string):any{
        return this.http.post('http://localhost:5000/api/bike/toggleInMaintenance/'+id, null, GenerateHeaders())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    addUser(id:string, email:string):any{
        let body = {
            "Email":email,
            "BikeId":id
        };
        return this.http.post('http://localhost:5000/api/bike/addUser', body, GenerateHeaders())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

function GenerateHeaders(){
    var currentUser = JSON.parse(localStorage.getItem('auth_token'));
    var token = currentUser.token;
    var email = currentUser.email;

    let headers = new Headers({
        'Content-Type': 'application/json',
        'x-access-token': token,
        'x-key':email
    });

    return new RequestOptions({ headers: headers });
}
function ReadUserFromLocalStorage(){
    var currentUser = JSON.parse(localStorage.getItem('auth_token'));
    return currentUser.email;
}
