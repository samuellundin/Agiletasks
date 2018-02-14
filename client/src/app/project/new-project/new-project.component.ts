import {Component, OnInit} from '@angular/core';
import {IMyDpOptions} from '../../../../node_modules/angular4-datepicker/src/my-date-picker';
import {ProjectService} from "../../service/project.service";
import {Project} from "../../model/project.model";
import {AuthenticationService} from "../../service/authentication.service";
import {ToasterService, ToastNotificationConfiguration, ToastType} from "ngx-toaster/src/lib";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project: Project;
  user: any;
  projectName: string;

  date: Date = new Date();



  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy.mm.dd',
    disableUntil: {year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate() - 1},
  };

  public startDate: any = {
    date: {
      year: this.date.getFullYear(),
      month: this.date.getMonth() + 1,
      day: this.date.getDate()
    }
  };
  public endDate: any = {
    date: {
      year: this.date.getFullYear(),
      month: this.date.getMonth() + 1,
      day: this.date.getDate()
    }
  };

  constructor(private projectService: ProjectService,
              private authenticationService: AuthenticationService,
              private toaster: ToasterService) {
    this.project = new Project();


  }

  ngOnInit() {

  }

  createProject() {

    this.project.projectName = this.projectName;
    this.project.startDate = this.startDate.formatted;
    this.project.endDate = this.endDate.formatted;
    this.authenticationService.getCurrentUser().subscribe(user => {
      this.project.createdById = user.id;
    });
    console.log(this.project);
    this.projectService.createProject(this.project).subscribe(() => {
      this.toaster.showToastMessage(this.getToaster('success'));

    }, ()=>{
      this.toaster.showToastMessage(this.getToaster('error'));

    }, ()=>{


      });
  }

  getToaster(type: string) {
    let succesToaster: ToastNotificationConfiguration = {
      message: 'Success, project was created!',
      displayDuration: 4000,
      autoHide: true,
      showCloseButton: true,
      toastType: ToastType.SUCCESS
    };

    let errorToaster: ToastNotificationConfiguration = {
      message: 'Error, Something is wrong!',
      displayDuration: 4000,
      autoHide: true,
      showCloseButton: true,
      toastType: ToastType.SUCCESS
    };


    if (type == 'success') {
      return succesToaster;
    }
    if(type == 'error'){
      return errorToaster;
    }


  }
}
