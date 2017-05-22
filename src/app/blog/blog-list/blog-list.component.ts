import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { BlogService } from '../blog.service';
import { Blog } from '../blog';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  @Input()
  count: number = 0;

  blogs: Observable<Blog[]>;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs(this.count);
  }

}
