import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment-timezone';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'toLocalTime' })
export class ToLocalTimePipe implements PipeTransform {
  /* transform(value: number, to: string): number {
    if(to==='local'){
      return moment.utc(value).local().format('YYYY-MM-DD HH:mm:ss A');
    } else if(to==='utc') {
      return moment(new Date()).toDate();
    }
    
  } */

  transform(value: any, tz: string): any {
    if (tz == 'PST') {
      tz = 'PST8PDT';
    } else if (tz == 'CST') {
      tz = 'CST6CDT';
    }
    //console.log(typeof tz)
    return moment
      .utc(value, null)
      .tz(tz)
      .format('YYYY-MM-DD HH:mmA')
      .split(' ')[1];
  }
}
