import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { TimeService } from './shared';
import { AuthService } from '../shared/security';
import { Router } from '@angular/router';
import { TimeListComponent } from './time-list';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {

  showCreate = false

  constructor(private timeService: TimeService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.timeService.fetch({
      orderByChild: 'date'
    }).subscribe(
      () => console.log('loaded times'),
      console.log
    )
  }

  onSignOut() {
    this.authService
      .logout()
      .subscribe()

    this.router.navigateByUrl('/login')
  }

  toggleCreate() {
    this.showCreate = !this.showCreate
  }

}
