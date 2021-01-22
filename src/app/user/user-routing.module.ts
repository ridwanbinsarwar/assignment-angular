import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserComponent } from './user.component';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'list', component: UserListComponent,canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent,canActivate: [AuthGuard] },
  { path: 'update', component: UpdateProfileComponent,canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
