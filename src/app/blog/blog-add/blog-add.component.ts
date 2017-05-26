import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BlogService } from '../blog.service';
import { Blog } from '../blog';

@Component({
  selector: 'blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  ngOnInit() { }

  onAddBlog(form: NgForm) {
    let blog: Blog = form.value;
    this.blogService.addBlog(blog);
    form.resetForm();
  }
}
