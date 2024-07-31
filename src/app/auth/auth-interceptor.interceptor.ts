import { HttpHandlerFn, HttpInterceptorFn, HttpParams, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { exhaustMap, take } from 'rxjs/operators';



export const authInterceptorInterceptor: HttpInterceptorFn = (req:HttpRequest<unknown>, next:HttpHandlerFn) => {
  const authService = inject(AuthService);
  return authService.user.pipe(
    take(1),
    exhaustMap((user) => {
      if (!user) {
        return next(req);
      }
      const modifiedRequest = req.clone({
        params: new HttpParams().set('auth', user.token),
      });
      return next(modifiedRequest);
    })
  );
};
