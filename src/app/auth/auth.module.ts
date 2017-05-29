import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdInputModule } from '@angular/material';

import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthAdminComponent } from './auth-admin/auth-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [
    AuthAdminComponent, 
  ],
  providers: [
    AuthService,
    AuthGuard,
    AngularFireAuth
  ]
})
export class AuthModule { }
