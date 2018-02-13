import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProjectComponent} from "./project/project.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./authenication/login/login.component";
import {RegistrationComponent} from "./authenication/registration/registration.component";
import {AuthenticationGuard} from "./security/authentication.guard";
import {NewProjectComponent} from "./project/new-project/new-project.component";


const appRoutes: Routes = [

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'project', component: ProjectComponent, canActivate: [AuthenticationGuard]},
  {path: 'newproject', component: NewProjectComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
