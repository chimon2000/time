import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private store: Store<AppState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store
            .select(state => state.user)
            .take(1)
            .filter(user => !!user)
            .do(console.log)
            .map(authInfo => authInfo.isLoggedIn())
            .do(allowed => {
                if (!allowed) {
                    this.router.navigate(['/login'])
                }
            })
    }
}
