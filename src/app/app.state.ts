import { timesReducer, timeFilter, Time } from './times';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { AuthInfo, authReducer } from './shared/security'

export interface AppState {
    times: Time[],
    user: AuthInfo
}

export default compose(combineReducers)({ times: timesReducer, user: authReducer, timeFilter })
