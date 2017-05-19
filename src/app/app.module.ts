import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdIconModule, MdGridListModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PageBaseModule } from './page-base/page-base.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdGridListModule,
    AngularFireModule.initializeApp(environment.firebase),
    PageBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
