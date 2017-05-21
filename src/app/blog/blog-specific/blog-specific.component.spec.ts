import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSpecificComponent } from './blog-specific.component';

describe('BlogSpecificComponent', () => {
  let component: BlogSpecificComponent;
  let fixture: ComponentFixture<BlogSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
