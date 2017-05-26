import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdButtonModule, MdInputModule } from '@angular/material';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogSpecificComponent } from './blog-specific/blog-specific.component';
import { BlogService } from './blog.service';
import { BlogAddComponent } from './blog-add/blog-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularFireDatabaseModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [
    BlogListComponent, 
    BlogSpecificComponent, 
    BlogAddComponent
  ],
  providers: [
    BlogService
  ],
  exports: [
    BlogListComponent,
    BlogAddComponent
  ]
})
export class BlogModule { }
