import { Pipe, PipeTransform } from '@angular/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'toLocalTime'})
export class ToLocalTimePipe implements PipeTransform {
  transform(value: number): number {
    return moment
    .utc(value)
    .local()
    .format('YYYY-MM-DD HH:mm:ss A');
  }
}