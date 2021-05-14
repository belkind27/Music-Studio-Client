import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAdapter',
})
export class TimeAdapterPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 60) {
      if (value < 10) {
        return `00:0${value}`;
      }
      return `00:${value}`;
    }
    let min;
    let sec;
    if (value < 600) {
      min = `0${Math.floor(value / 60)}`;
    } else {
      min = Math.floor(value / 60);
    }
    if (value % 60 < 10) {
      sec = `0${value % 60}`;
    } else {
      sec = value % 60;
    }
    return `${min}:${sec}`;
  }
}
