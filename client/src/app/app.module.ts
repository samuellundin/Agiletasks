import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppComponent} from './app.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {FooterComponent} from './core/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './authenication/login/login.component';
import {RegistrationComponent} from './authenication/registration/registration.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './user-profile/profile/profile.component';
import {AuthenticationGuard} from "./security/authentication.guard";
import {UserService} from "./service/user.service";
import {ProjectService} from "./service/project.service";
import {AuthenticationService} from "./service/authentication.service";
import {AuthenticationInterceptor} from "./security/authentication.interceptor";
import {NewProjectComponent} from './manage-projects/new-project/new-project.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserFilterPipe} from './pipe/user-filter.pipe';
import {EditProfileComponent} from './user-profile/edit-profile/edit-profile.component';
import {ManageProjectsComponent} from './manage-projects/manage-projects.component';
import {ManageNavbarComponent} from './manage-projects/manage-navbar/manage-navbar.component';
import {ProjectOverviewComponent} from './projects/project-overview/project-overview.component';
import {ManageUsersComponent} from './manage-projects/manage-users/manage-users.component';
import { TaskItemComponent } from './task-item/task-item.component';
import {BsDatepickerModule, SortableModule} from "ngx-bootstrap";
import {ToastrModule} from "ngx-toastr";
import { ManageSettingsComponent } from './manage-projects/manage-settings/manage-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    NewProjectComponent,
    UserFilterPipe,
    EditProfileComponent,
    ManageProjectsComponent,
    ManageNavbarComponent,
    ProjectOverviewComponent,
    ManageUsersComponent,
    TaskItemComponent,
    ManageSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    SortableModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }, AuthenticationGuard, UserService, ProjectService, AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {

}
