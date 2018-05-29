import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {Project} from "../../model/project.model";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {AuthenticationService} from "../../service/authentication.service";
import {Task} from '../../model/task.model';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {TaskService} from "../../service/task.service";
import {ToastrService} from "ngx-toastr";
import {EditTaskModalComponent} from "../../modal/edit-task-modal/edit-task-modal.component";
import {CreateTaskModalComponent} from "../../modal/create-task-modal/create-task-modal.component";

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
  task: Task = new Task;

  todoList: Task[] = [];
  progressList: Task[] = [];
  doneList: Task[] = [];
  modalRef: BsModalRef;
  config = {
    keyboard: true
  };
  constructor(private authenticationService: AuthenticationService,
              private projectService: ProjectService,
              private modalService: BsModalService,
              private taskService: TaskService,
              private toastrService: ToastrService) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  ngOnDestroy(): void {
    if(this.selectedProject) {
      this.selectedProject.taskList = [];
      this.selectedProject.taskList.push(...this.todoList);
      this.selectedProject.taskList.push(...this.progressList);
      this.selectedProject.taskList.push(...this.doneList);
      this.updateProject();
    }
  }

  getCurrentUser() {
    this.loading = true;
    this.authenticationService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
      this.getProjects();
    });
  }

  updateProject() {
    this.projectService.updateProject(this.selectedProject).subscribe((project: Project) => {
      let index = this.projects.findIndex(p => p.id == project.id);
      this.projects[index] = project;
      this.selectedProject = project;
    },()=>{
      this.toastrService.error("Something went wrong, please try agin!", "Error!");
    },()=>{
      this.setLists();
      this.toastrService.success("The project have been updated!", "Congratulations!");
    });
  }

  getProjects() {
    this.projectService.getAssignedProjectsByUserId(this.currentUser.id).subscribe((projects: Project[]) => {
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
    const initialState = { projectId: this.selectedProject.id };
    this.modalRef = this.modalService.show(CreateTaskModalComponent, {initialState});
    this.modalRef.content.taskEmitter.subscribe((task: Task) => {
      task.projectId = this.selectedProject.id;
      task.status = "ToDo";
      this.selectedProject.taskList.push(task);
      this.updateProject();
    });
  }

  editTask(task: Task) {
    let index = this.selectedProject.taskList.findIndex(t => t.id == task.id);
    const initialState = { task: JSON.parse(JSON.stringify(this.selectedProject.taskList[index])) };
    this.modalRef = this.modalService.show(EditTaskModalComponent, {initialState});
    this.modalRef.content.taskEmitter.subscribe(t => {
      if(t == null) {
        this.selectedProject.taskList.splice(index, 1);
        this.updateProject();
      } else {
        this.selectedProject.taskList[index] = t;
        this.updateProject();
      }
    });
  }

}
