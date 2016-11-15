import { ActionReducer, Action } from '@ngrx/store';
import * as TimeActions from './time.actions'
import { Time } from './time';


let remove = (arr: any[], index) => {

    return [
        ...arr.slice(0, index),
        ...arr.slice(index + 1)
    ];
}

let findIndex = (times: Time[], id: string) => times.findIndex(row => row.id === id)

let removeTime = (times: Time[], id: string) => {
    let index = findIndex(times, id)

    return index === -1 ? [...times] : remove(times, index)
}

export const timesReducer: ActionReducer<Time[]> = (state: Time[], action: Action) => {

    if (action instanceof TimeActions.AddTimeAction) {
        const time = action.payload

        return [...state, time]
    } else if (action instanceof TimeActions.LoadTimesAction) {
        const times = action.payload

        return [...times]

    } else if (action instanceof TimeActions.RemoveTimeAction) {
        return removeTime(state, action.payload.id)
    }

    return state
}
