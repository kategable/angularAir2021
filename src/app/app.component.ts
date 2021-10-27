import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularAir2021';
  filters: string[] = [];
  ssnChanged(checkbox: any) {
    if (checkbox.currentTarget.checked) {
      this.filters.push('ssn');
      this.filters = [...this.filters];
      return;
    }
    this.filters= this.filters.filter(i=> i==="ssn")
  }
  dobChanged(checkbox: any) {
    if (checkbox.currentTarget.checked) {
      this.filters.push('dob');
      this.filters = [...this.filters];

      return;
    }
    this.filters= this.filters.filter(i=> i==="dob")

  }
}
