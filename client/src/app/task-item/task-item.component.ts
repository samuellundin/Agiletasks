import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../model/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent  {

  @Input() task: Task;

}
