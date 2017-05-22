import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

import { Blog } from './blog';

@Injectable()
export class BlogService {

  constructor(private database: AngularFireDatabase) { }

  getBlogs(count: number = 10): Observable<Blog[]> {
    return this.database.list("/blog", {
      query: {
        limitToLast: count
      }
    });
  }

  getBlog(blogId: number) {
    return null;
  }
}
