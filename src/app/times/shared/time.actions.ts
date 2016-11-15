import { Action } from '@ngrx/store';
import { Time } from './time';

export const TimeActions = {
    LoadTimes: 'LoadTimes',
    RemoveTime: 'RemoveTime',
    AddTime: 'AddTime', 
    FilterAll: 'FilterAll', 
    FilterToday: 'FilterToday', 
    FilterLastWeek: 'FilterLastWeek', 
    FilterLastMonth: 'FilterLastMonth'
}

export class AddTimeAction implements Action {
    type = TimeActions.AddTime
    constructor(public payload: Time) { }
}

export class RemoveTimeAction implements Action {
    type = TimeActions.RemoveTime
    constructor(public payload: Time) { }
}

export class LoadTimesAction implements Action {
    type = TimeActions.LoadTimes
    constructor(public payload: Time[]) { }
}

export class FilterTodayAction {
    type = TimeActions.FilterToday
}

export class FilterLastWeekAction {
    type = TimeActions.FilterLastWeek
}

export class FilterAllAction {
    type = TimeActions.FilterAll
}

export class FilterLastMonthAction {
    type = TimeActions.FilterLastMonth
}