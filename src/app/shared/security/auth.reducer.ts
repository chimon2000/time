import { ActionReducer, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions'
import { AuthInfo } from './auth.info';

export const authReducer: ActionReducer<AuthInfo> = (state: AuthInfo, action: Action) => {
    if (action instanceof AuthActions.UpdateAuthInfoAction) {
        return action.payload
    }

    return state
}

