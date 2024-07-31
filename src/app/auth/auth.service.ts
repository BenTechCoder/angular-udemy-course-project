import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUJJ6l2ZumCxayF0DJVS9e_gIN3ldlxC4',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn
          );
        })
      );
  }
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUJJ6l2ZumCxayF0DJVS9e_gIN3ldlxC4
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUJJ6l2ZumCxayF0DJVS9e_gIN3ldlxC4',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenEpirationDate: Date;
    } = JSON.parse(localStorage.getItem('userAuthData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenEpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenEpirationDate).getTime() - new Date().getTime()
      this.autoLogout(expirationDuration)
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userAuthData')
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer)
    }
    this.tokenExpirationTimer = null
  }

  autoLogout(expirationDuration:number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout()
    }, expirationDuration);
  }

  getUserID() {
    const data = JSON.parse(localStorage.getItem('userAuthData'))
    return data._token;
  }

  private handleAuthentication(email, localId, idToken, expiresIn) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, localId, idToken, expirationDate);
    this.user.next(user);
    this.autoLogout(+expiresIn * 1000)
    localStorage.setItem('userAuthData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'an Unnown error occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(`${errorRes}`));
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'this email already exsists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'email not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'password invalid';
        break;
    }
    return throwError(() => new Error(errorMessage));
  }
}
