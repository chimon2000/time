import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Time } from '../shared';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimeService } from '../shared';
import { TimeFormComponent } from '../time-form';
import { MdlSnackbarService } from 'angular2-mdl';
import { FilterAllAction, FilterTodayAction, FilterLastWeekAction, FilterLastMonthAction } from '../shared/time.actions';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})
export class TimeListComponent implements OnInit {
  @Input() times: Observable<Time[]>
  @Output() createTime = new EventEmitter()
  @Input() showCreate = false

  filters = [
    { name: 'all', description: "All", action: FilterAllAction },
    { name: 'today', description: "Today", action: FilterTodayAction },
    { name: 'lastWeek', description: "Last 7 Days", action: FilterLastWeekAction }
  ]
  selectedFilter = this.filters[0]

  private model: Observable<any>
  private loaded = false

  tableOptions = {
    headers: [
      { key: 'date', name: 'Date', type: 'Date' },
      { key: 'what', name: 'What?' },
      { key: 'hours', name: 'Hours', type: 'Numeric' }
    ],
    selectionMode: 'single'
  }

  @ViewChild(TimeFormComponent) timeForm: TimeFormComponent

  constructor(private store: Store<AppState>, private timeService: TimeService, private snackbarService: MdlSnackbarService) {
    this.times = this.store.select(state => state.times)
    this.model = Observable.combineLatest(
      store.select(state => state.times),
      store.select('timeFilter'),
      (times: Time[], filter) => {
        return {
          total: times.length,
          times: times.filter(filter)
        }
      })

    this.model.do(() => this.loaded = true)
  }

  ngOnInit() {
  }

  onCreateTime(time) {
    this.timeService.create(time)
      .subscribe()
    this.snackbarService.showToast('New time added')
    this.timeForm.reset()
  }

  onFilterChanged(selected) {
    let action = this.filters[selected].action

    this.store.dispatch(new action())
  }
}
