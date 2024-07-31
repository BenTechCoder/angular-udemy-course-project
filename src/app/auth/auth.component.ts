import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private authService: AuthService, private router:Router) {}
  isLoginMode = true;
  isLoading = false;
  error:string = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    const email = `${form.value.email}`.toLowerCase();
    const password:string = form.value.password;
    let authObs:Observable<AuthResponseData>;

    if (this.isLoginMode) {
     authObs = this.authService.login(email, password)
    } else {
      authObs = this.authService.signup(email, password)
    }

      authObs.subscribe({
        next: (resData) => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/recipe-book'])
        },
        error: 
        (error) => {
          console.log(error);
          this.error = error
          this.isLoading = false;
        }
      }
      );  
    
    form.reset();
  }
}
