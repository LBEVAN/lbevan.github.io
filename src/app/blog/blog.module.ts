import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogSpecificComponent } from './blog-specific/blog-specific.component';
import { BlogService } from './blog.service';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    BlogListComponent, 
    BlogSpecificComponent
  ],
  providers: [
    BlogService
  ],
  exports: [
    BlogListComponent
  ]
})
export class BlogModule { }
