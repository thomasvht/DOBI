import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {IBike, ILogin} from '../interfaces';
import { IUser } from '../interfaces';

@Injectable()
export class DataService {


    constructor (private http: Http) {}

    getAdminBikes() : Observable<IBike[]>{
        return this.http.get('http://localhost:5000/api/admin/bike')
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    register(user:IUser): void{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http
            .post('http://127.0.0.1:5000/register', user, options)
            .subscribe((result) =>{
                console.log('result',result);
            });
    }

    login(user:ILogin): void{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http
            .post('http://127.0.0.1:5000/login', user, options)
            .subscribe((result) =>{
                console.log('result',result);
            });
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}
