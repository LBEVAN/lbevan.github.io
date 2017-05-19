import { Component, OnInit } from '@angular/core';

import { SocialBarComponent } from '../social-bar/social-bar.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
