import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProjectComponent} from "./manage-projects/project/project.component";
import {ProfileComponent} from "./user-profile/profile/profile.component";
import {LoginComponent} from "./authenication/login/login.component";
import {RegistrationComponent} from "./authenication/registration/registration.component";
import {AuthenticationGuard} from "./security/authentication.guard";
import {NewProjectComponent} from "./projects/new-project/new-project.component";
import {EditProfileComponent} from "./user-profile/edit-profile/edit-profile.component";
import {ManageProjectsComponent} from "./manage-projects/manage-projects.component";


const appRoutes: Routes = [

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'project', component: ProjectComponent, canActivate: [AuthenticationGuard]},
  {path: 'newproject', component: NewProjectComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'auth/login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'profile_edit', component: EditProfileComponent},
  {path: 'manage_project', component: ManageProjectsComponent, children: [
    {path: ':id', component: ProjectComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
