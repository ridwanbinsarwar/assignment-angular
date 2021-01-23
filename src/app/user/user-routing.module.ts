import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserComponent } from './user.component';
import { AuthGuard } from '../_helpers/auth.guard';
import { ProfileService } from './services/profile.service';
import { GetUsersService } from './services/get-users.service';

const routes: Routes = [
  { path: '', 
  redirectTo: '/user/list', pathMatch: 'full'
  },
  { path: 'list', 
  component: UserListComponent,
  canActivate: [AuthGuard] ,
  resolve: {users: GetUsersService} 
  },
  { 
    path: 'profile', 
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    resolve: {users: ProfileService} 
  },
  { path: 'update', 
  component: UpdateProfileComponent,
  canActivate: [AuthGuard] 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
