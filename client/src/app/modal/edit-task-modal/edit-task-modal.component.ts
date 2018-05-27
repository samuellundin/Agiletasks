import {Component, EventEmitter, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Task} from '../../model/task.model';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent {

  task: Task;
  taskEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(public bsModalRef: BsModalRef) {}

  delete() {
    this.bsModalRef.hide();
    this.taskEmitter.emit(null);
  }

  save() {
    this.bsModalRef.hide();
    this.taskEmitter.emit(this.task);
  }

}
