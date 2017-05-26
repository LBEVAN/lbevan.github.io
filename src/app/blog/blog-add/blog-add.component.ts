import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';
import { Blog } from '../blog';

@Component({
  selector: 'blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  blog: Blog = new Blog();

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  add() {
    this.blogService.addBlog(this.blog);
  }

}
