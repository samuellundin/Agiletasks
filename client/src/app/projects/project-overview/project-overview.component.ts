import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {Project} from "../../model/project.model";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {AuthenticationService} from "../../service/authentication.service";
import {Task} from '../../model/task.model';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit, OnDestroy {

  currentUser: User;
  projects: Project[] = [];
  selectedProject: Project;
  loading: boolean = false;

  todoList: Task[] = [];
  progressList: Task[] = [];
  doneList: Task[] = [];

  constructor(private authenticationService: AuthenticationService,
              private projectService: ProjectService) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  ngOnDestroy(): void {
    if(this.selectedProject) {
      this.selectedProject.taskList = [];
      this.selectedProject.taskList.push(...this.todoList);
      this.selectedProject.taskList.push(...this.progressList);
      this.selectedProject.taskList.push(...this.doneList);
      this.projectService.updateProject(this.selectedProject).subscribe(() => {});
    }
  }

  getCurrentUser() {
    this.loading = true;
    this.authenticationService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
      this.getProjects();
    });
  }

  getProjects() {
    this.projectService.getProjectsByUserId(this.currentUser.id).subscribe((projects: Project[]) => {
      this.projects = projects;
      console.log(this.projects)
    }, error => {
      console.log(error);
    }, () => {
      this.loading = false;
    });
  }

  setLists() {
    this.todoList = this.selectedProject.taskList.filter(task => task.status == "ToDo");
    this.progressList = this.selectedProject.taskList.filter(task => task.status == "InProgress");
    this.doneList = this.selectedProject.taskList.filter(task => task.status == "Done");
  }

  changeStatus(status: string, tasks: Task[]) {
    tasks.forEach(task => {
      if(task.status != status) {
        task.status = status;
      }
    });
  }

  openAddTaskModal() {
    //TODO: Add task modal
  }
}
