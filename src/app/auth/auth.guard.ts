import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { map, Observable, take } from "rxjs";

export const AuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
    const authService = inject(AuthService)
    const router = inject(Router)
    return authService.user.pipe(take(1),map(user => {
        const isAuth =  !!user
        if (isAuth) {
            return true
        }
        return router.createUrlTree(['/auth'])
    }))
}