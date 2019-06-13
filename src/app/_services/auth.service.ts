import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: "root"
})
export class AuthService{
baseURl = 'https://lojaspeedservice.azurewebsites.net/Account/';

    constructor(private http: HttpClient){}
    login(model: any){
        return this.http.post(this.baseURl + 'CreateToken', model)
        .pipe(
            map((response: any) => {
                const user = response;
                if (user){
                    localStorage.setItem('token', user.token);
                }

            })
        )
    }
}