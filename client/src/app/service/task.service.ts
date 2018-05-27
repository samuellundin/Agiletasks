import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TASK} from "./api.url";
import {Task} from "../model/task.model";

@Injectable()
export class TaskService {

  constructor(private http : HttpClient) { }

  createTask(task: Task){
    return this.http.post(TASK.url + "/", task);
  }
}
