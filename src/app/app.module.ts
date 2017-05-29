import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MdInputModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageBaseModule } from './page-base/page-base.module';
import { BlogModule } from './blog/blog.module';
import { AuthModule } from './auth/auth.module';
import { environment } from '../environments/environment';
import routes  from './app-router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    PageBaseModule,
    BlogModule,
    AuthModule,
    MdInputModule
  ], 
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
