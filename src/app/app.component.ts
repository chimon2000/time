import { Component } from '@angular/core';
import { AppReadyEvent } from './app-ready.event';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    AppReadyEvent
  ]
})
export class AppComponent {
  constructor(appReadyEvent: AppReadyEvent) {
    appReadyEvent.trigger()
  }
}
