import { Action } from '@ngrx/store';
import { AuthInfo } from './auth.info';
export class UpdateAuthInfoAction implements Action {
    type = 'Authenticated'
    constructor(public payload: AuthInfo) {}
}