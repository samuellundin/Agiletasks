import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './authenication/login/login.component';
import { RegistrationComponent } from './authenication/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './manage-projects/project/project.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import {AuthenticationGuard} from "./security/authentication.guard";
import {UserService} from "./service/user.service";
import {ProjectService} from "./service/project.service";
import {AuthenticationService} from "./service/authentication.service";
import {AuthenticationInterceptor} from "./security/authentication.interceptor";
import { NewProjectComponent } from './manage-projects/new-project/new-project.component';
import {MyDatePickerModule} from '../../node_modules/angular4-datepicker/src/my-date-picker'
import {ToasterModule} from "ngx-toaster/src/lib";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserFilterPipe } from './pipe/user-filter.pipe';
import { EditProfileComponent } from './user-profile/edit-profile/edit-profile.component';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ManageNavbarComponent } from './manage-projects/manage-navbar/manage-navbar.component';
import { ManageSprintsComponent } from './manage-projects/manage-navbar/manage-sprints/manage-sprints.component';
import { ProjectOverviewComponent } from './projects/project-overview/project-overview.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ProjectComponent,
    ProfileComponent,
    NewProjectComponent,
    UserFilterPipe,
    EditProfileComponent,
    ManageProjectsComponent,
    ManageNavbarComponent,
    ManageSprintsComponent,
    ProjectOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyDatePickerModule,
    AppRoutingModule,
    HttpClientModule,
    ToasterModule,
    BrowserAnimationsModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }, AuthenticationGuard, UserService, ProjectService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
