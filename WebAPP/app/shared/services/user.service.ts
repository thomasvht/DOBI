/**
 * Created by Sander Verkaemer on 08/12/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ILogin, IUser} from '../interfaces';

@Injectable()
export class UserService {
    private loggedIn = false;

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(user:ILogin) {
        console.log("Login!");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                'http://127.0.0.1:5000/login',
                user,
                { headers }
            )
            .map(res => res.json())
            .map((res) => {
                console.log(res);
                if (res.error) {
                    this.loggedIn = false;
                }else{
                    localStorage.setItem('auth_token', JSON.stringify({ token: res.token, email: res.user.email }));
                    this.loggedIn = true;
                }

                return res.success;
            });
    }

    register(user:IUser){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post('http://127.0.0.1:5000/register', user, headers)
            .map(res => res.json())
            .map((res) => {
                console.log(res);
                if (res.error) {
                    this.loggedIn = false;
                }else{
                    localStorage.setItem('auth_token', JSON.stringify({ token: res.token, email: res.user.email }));
                    this.loggedIn = true;
                }

                return res.success;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}