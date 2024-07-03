import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string; 
}

@Injectable({providedIn:'root'})

export class AuthService {
    constructor(private http: HttpClient) {}

    signup(email: string, password: string){
        return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUJJ6l2ZumCxayF0DJVS9e_gIN3ldlxC4", {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }
}