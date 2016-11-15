import { Injectable } from '@angular/core';
import { Time } from './time';
import * as TimeActions from './time.actions';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Query } from 'angularfire2/interfaces';
import { Store } from '@ngrx/store';
import { AuthInfo } from '../../shared/security';
import { Observable, Observer } from 'rxjs';

import {
    AppState
} from '../../app.state'

let fromPromise = (promise) => {
    return Observable.create((observer: Observer<any>) => {
        promise.then(() => observer.complete())
    })
}

@Injectable()
export class TimeService {

    items: FirebaseListObservable<any>

    constructor(private db: AngularFireDatabase, private store: Store<AppState>) { }

    get user() {
        return this.store.select(state => state.user)
    }

    fetch(query: Query = {}) {
        return this.user
            .filter(user => !!user)
            .flatMap(user => this.db.list(`times/${user.$uid}`, { query }))
            .do(console.log)
            .map(Time.fromJsonList)
            .do(times => this.store.dispatch(new TimeActions.LoadTimesAction(times)))
    }

    fetchById(id: string) {
        return this.db.object(`times/${id}`)
            .do(console.log)
            .map(Time.fromJson)
    }

    create(time: Time) {
        return this.user
            .do(console.log)
            .filter(user => !!user)
            .do(console.log)
            .flatMap(user => fromPromise(this.db.list(`times/${user.$uid}`).push(time)))
    }
}
