import { FilterTodayAction, FilterLastWeekAction, FilterLastMonthAction } from './time.actions'
import { Time } from './time';
import { Action } from '@ngrx/store';
import * as moment from 'moment'

export const timeFilter = (state = (time: Time) => time, action: Action) => {
    if (action instanceof FilterTodayAction) {
        return (time: Time) => moment().isSame(time.date, 'day')
    } else if (action instanceof FilterLastWeekAction) {
        return (time: Time) => moment().subtract(1, 'weeks').isBefore(time.date)
    } else if (action instanceof FilterLastMonthAction) {
        return (time: Time) => moment().subtract(1, 'months').isBefore(time.date)
    }
    
    return time => true
}
