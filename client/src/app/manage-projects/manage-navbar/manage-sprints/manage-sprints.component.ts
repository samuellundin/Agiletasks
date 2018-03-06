import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProjectService} from "../../../service/project.service";
import {Project} from "../../../model/project.model";
import {Sprint} from "../../../model/sprint.model";
import {Task} from '../../../model/task.model';
import { BsModalService} from "ngx-bootstrap";
import { NewSprintModal} from "../../../sprint/new-sprint/new-sprint.component";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-manage-sprints',
  templateUrl: './manage-sprints.component.html',
  styleUrls: ['./manage-sprints.component.css']
})
export class ManageSprintsComponent implements OnInit {

  currentProject: any;
  selectedSprint: Sprint;
  sprintList: any[];
  taskList: Task[];

  todoList: any[] = [];
  progressList: any[];
  doneList: any[] = [];

  bsModalRef: BsModalRef;

  constructor(private projectService: ProjectService,
              private modalService: BsModalService) {}

  ngOnInit() {
    this.currentProject = this.projectService.getCurrentProject();
    this.sprintList = this.projectService.getCurrentProject().sprintList;
  }

  handleSprintChange() {
    this.taskList = this.selectedSprint.taskList;
    this.filterTaskList(this.taskList);
  }

  filterTaskList(taskList: Task[]) {
    this.todoList = [];
    this.progressList = [];
    this.doneList = [];
    taskList.forEach((task: Task) => {
      if(task.status == "ToDo") {
        this.todoList.push(task);
      } else if(task.status == "InProgress") {
        this.progressList.push(task);
      } else if(task.status == "Done") {
        this.doneList.push(task);
      }
    });
  }

  openNewSprintModal() {
    this.bsModalRef = this.modalService.show(NewSprintModal);
    this.bsModalRef.content.onClose.subscribe(result => {
      this.sprintList.push(result);
    });
  }

}
