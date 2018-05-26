import {Component, OnInit} from '@angular/core';

import {ProjectService} from "../../service/project.service";
import {Project} from "../../model/project.model";
import {AuthenticationService} from "../../service/authentication.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  project: Project = new Project;

  constructor(private projectService: ProjectService,
              private authenticationService: AuthenticationService,
              private toastrService: ToastrService,
              private router: Router) {

  }

  ngOnInit() {

  }

  createProject() {

  this.authenticationService.getCurrentUser().subscribe(user => {
      this.project.createdById = user.id;
    });
    console.log(this.project);
    this.projectService.createProject(this.project).subscribe(() => {
    }, ()=>{
      this.toastrService.error("Something went wrong, please try agin!", "Error!");
    }, ()=>{
      this.toastrService.success("You have crreated a new project with the name " + this.project.projectName +"!", "Congratulations!");
      this.router.navigate(["/manage_project"]);
      });
  }

}
