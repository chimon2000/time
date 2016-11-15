import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private af: AngularFire) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.af
            .auth
            .map(user => !!user)
            .take(1)
            .do(allowed => {
                if (!allowed) {
                    this.router.navigate(['/login'])
                }
            })
    }
}
