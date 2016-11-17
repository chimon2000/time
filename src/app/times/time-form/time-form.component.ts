import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Time } from '../shared';
import { MdInput } from '@angular/material';
@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.css']
})
export class TimeFormComponent implements OnInit {
  @Input() time: Time = new Time()

  @Output() createTime = new EventEmitter()
  @ViewChild('hours') hoursInput: ElementRef

  constructor() { }

  ngOnInit() { }

  onSubmit(time) {
    console.log('create time', time)
    this.createTime.emit(time)
  }

  reset() {
    this.time = new Time()

    this.hoursInput.nativeElement.focus()
  }

}
