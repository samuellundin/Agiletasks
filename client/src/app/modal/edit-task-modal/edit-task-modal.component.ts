import {Component, EventEmitter, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Task} from '../../model/task.model';
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {

  task: Task;
  users: User[] = [];
  taskEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private userService: UserService,
              public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  delete() {
    this.bsModalRef.hide();
    this.taskEmitter.emit(null);
  }

  save() {
    this.bsModalRef.hide();
    this.taskEmitter.emit(this.task);
  }

}
