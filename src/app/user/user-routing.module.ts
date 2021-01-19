import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'list', component: UserListComponent },
  { path: 'profile', component: UserProfileComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
