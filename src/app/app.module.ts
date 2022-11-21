import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApresentationComponent } from './sections/apresentation/apresentation.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Section1Component } from './sections/section1/section1.component';
import { Section2Component } from './sections/section2/section2.component'

@NgModule({
  declarations: [
    AppComponent,
    ApresentationComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
