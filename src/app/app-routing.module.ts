import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardManagerComponent},
  { path: 'admin', component: BoardAdminComponent },
  { path: 'userdetails', component: UserDetailsComponent},
  { path: 'managerdetails', component: ManagerDetailsComponent},
  { path: 'moviedetails', component: MovieDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
