import {Component, EventEmitter, OnInit} from '@angular/core';
import {Task} from "../../model/task.model";
import {BsModalRef} from "ngx-bootstrap";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.css']
})
export class CreateTaskModalComponent implements OnInit {

  task: Task = new Task();
  users: User[] = [];
  taskEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private userService: UserService,
              public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  save() {
    this.bsModalRef.hide();
    this.taskEmitter.emit(this.task);
  }

}
