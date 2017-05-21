import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

import { Blog } from './blog';

@Injectable()
export class BlogService {

  constructor(private database: AngularFireDatabase) { }

  public getBlogs(): Observable<Blog[]> {
    return this.database.list("/blog");
  }

  getBlog(blogId: number) {
    return null;
  }
}
