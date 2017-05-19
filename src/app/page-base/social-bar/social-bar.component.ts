import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer, DOCUMENT } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css']
})
export class SocialBarComponent implements OnInit {

  socialIcons:Array<{name: string, link: string}> = [
    {name: 'github', link: 'https://github.com/LBEVAN'},
    {name: 'linkedin', link: 'https://www.linkedin.com/in/luke-bevan-40a47089/'},
    {name: 'twitter', link: 'https://twitter.com/LukeBevano'}
  ];

  constructor(private iconRegistry: MdIconRegistry, 
              private sanitizer: DomSanitizer, 
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.iconRegistry.addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/social/github-box.svg'));
    this.iconRegistry.addSvgIcon('linkedin', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/social/linkedin-box.svg'));
    this.iconRegistry.addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/social/twitter-box.svg'));
  }   

  onClick(link: string) {
    this.document.location.href = link;
  }
}
