import { Component } from '@angular/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  timezone: string = 'EST';
  timezoneList = ['EST', 'CST', 'MST', 'PST'];
  EndTime: '2022-01-31T05:40:00Z';
  StartTime: '2022-01-31T15:10:00Z';

  ngOnInit() {
    /* this.utcDateTime = moment(new Date()).toDate();
    this.local_date = moment
      .utc(this.utcDateTime)
      .local()
      .format('YYYY-MM-DD HH:mm:ss A');
    console.log(this.local_date);
    console.log(moment(this.local_date).toDate()); */
    //this.displaySlot = this.timeslot;
  }

  selectState(s) {
    this.timezone = s;
  }
}
