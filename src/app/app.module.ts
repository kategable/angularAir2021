import { FiltersDirective } from './filters.directive';
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenewDirective } from './renew.directive';
import { SettingsDirective } from './settings.directive';


@NgModule({
  declarations: [
    AppComponent,
    RenewDirective,
    SettingsDirective,
    FiltersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
