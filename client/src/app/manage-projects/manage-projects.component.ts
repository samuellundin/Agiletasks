import { Component, OnInit } from '@angular/core';
import {Project} from "../model/project.model";
import {User} from "../model/user.model";
import {ProjectService} from "../service/project.service";
import {UserService} from "../service/user.service";
import {AuthenticationService} from "../service/authentication.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.css']
})
export class ManageProjectsComponent implements OnInit {

  selectedProject: Project;
  projectList: Project[] = [];
  currentUser: User;
  id: number;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {


    this.authenticationService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
    this.projectService.getProjectsByUserId(this.currentUser.id).subscribe((projects: Project[]) => {
      this.projectList = projects;
    });
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.selectedProject = new Project;


  }

  getSelectedIdFromProject() {
    this.projectService.setCurrentProject(this.selectedProject);
    this.id = this.selectedProject.id;
   this.router.navigate([this.id], {relativeTo: this.route});
   }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }


}
