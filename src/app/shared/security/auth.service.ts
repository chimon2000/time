import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { BehaviorSubject } from "rxjs/Rx"
import { AuthInfo } from './auth.info'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { UpdateAuthInfoAction } from './auth.actions';

const Providers = {
    google: AuthProviders.Google,
    facebook: AuthProviders.Facebook,
    github: AuthProviders.Github
}

const UNKNOWN_USER = new AuthInfo(null)

@Injectable()
export class AuthService {
    authInfo = new BehaviorSubject<AuthInfo>(null)

    constructor(private db: AngularFire, private store: Store<AppState>) {
        this.db.auth
            .map(auth => auth ? new AuthInfo(auth.uid) : UNKNOWN_USER)
            .do(console.log)
            .do(auth => this.store.dispatch(new UpdateAuthInfoAction(auth)))
            .subscribe(auth => this.authInfo.next(auth))
     }

    login({email, password}) {

        this.db.auth
            .login({email, password}, {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            })

        return this.authInfo.asObservable()
    }

    loginWithProvider(provider: string) {
        let authProvider = Providers[provider]

        this.db.auth
            .login({
                provider: authProvider,
                method: AuthMethods.Popup
            }).then(console.log)

        return this.authInfo.asObservable()
    }


    overrideLogin() {
        this.db.auth.login({
            provider: AuthProviders.Anonymous,
            method: AuthMethods.Anonymous,
        }).then(authData => this.authInfo.next(new AuthInfo(authData.uid)))

        return this.authInfo.asObservable()
    }

    logout() {
        this.db.auth.logout()
        this.store.dispatch(new UpdateAuthInfoAction(UNKNOWN_USER))

        return this.authInfo.asObservable()
    }
}