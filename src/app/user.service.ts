import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  needsRenew = true;
  get renewDate(): string | null {
    let date = new Date();
    let dd = this.datePipe.transform(date.setDate(date.getDate() + 1));
    return dd;
  }
  constructor(private datePipe: DatePipe) {}
}
