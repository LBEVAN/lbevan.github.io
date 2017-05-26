import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-specific',
  templateUrl: './blog-specific.component.html',
  styleUrls: ['./blog-specific.component.css']
})
export class BlogSpecificComponent implements OnInit {

  blog: Observable<Blog>;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.blog = this.blogService.getBlog(params['id']);
    });
  }
}
