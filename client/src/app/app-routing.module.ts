import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProjectComponent} from "./manage-projects/project/project.component";
import {ProfileComponent} from "./user-profile/profile/profile.component";
import {LoginComponent} from "./authenication/login/login.component";
import {RegistrationComponent} from "./authenication/registration/registration.component";
import {AuthenticationGuard} from "./security/authentication.guard";
import {NewProjectComponent} from "./manage-projects/new-project/new-project.component";
import {EditProfileComponent} from "./user-profile/edit-profile/edit-profile.component";
import {ManageProjectsComponent} from "./manage-projects/manage-projects.component";
import {ManageNavbarComponent} from "./manage-projects/manage-navbar/manage-navbar.component";
import {ManageSprintsComponent} from "./manage-projects/manage-navbar/manage-sprints/manage-sprints.component";
import {ProjectOverviewComponent} from "./projects/project-overview/project-overview.component";



const appRoutes: Routes = [

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'newproject', component: NewProjectComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'auth/login', component: LoginComponent},
  {path: 'project', component: ProjectOverviewComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'profile_edit', component: EditProfileComponent},
  {path: 'manage_project', component: ManageProjectsComponent, children: [
    {path: ':id', component: ManageNavbarComponent, children:[
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users',  component: ProjectComponent},
      {path: 'sprints', component: ManageSprintsComponent},
      {path: 'settings', component: NewProjectComponent}
    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
