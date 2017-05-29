import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { BlogSpecificComponent } from './blog/blog-specific/blog-specific.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthAdminComponent } from './auth/auth-admin/auth-admin.component';

const routes: Routes = [
  { path: 'blog/add', component: BlogAddComponent, canActivate: [ AuthGuard ] },
  { path: 'blog/:id', component: BlogSpecificComponent },
  { path: 'auth/admin', component: AuthAdminComponent },
  { path: '', component: HomeComponent }
]

export default routes;