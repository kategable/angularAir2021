import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularAir2021';
  @ViewChild('reports') reports: any;
  @ViewChild('charts') charts: any;
  get allChecked():[]{
    let arr = [];
    if()
    return arguments;
  }
}
