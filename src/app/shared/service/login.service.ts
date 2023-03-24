import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {

    }

    login(id:string, pass:string) {
       return this.http.post('https://dummyjson.com/auth/login', {
        username: 'kminchelle',
        password: '0lelplR',
       });
    }
}