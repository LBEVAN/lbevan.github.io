import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { BlogSpecificComponent } from './blog/blog-specific/blog-specific.component';

const routes: Routes = [
  { path: 'blog/add', component: BlogAddComponent },
  { path: 'blog/:id', component: BlogSpecificComponent },
  { path: '', component: HomeComponent }
]

export default routes;