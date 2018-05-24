import {User} from "./user.model";
import {Task} from "./task.model";

export class Project {

  id: number;
  projectName: string;
  startDate: string;
  endDate: string;
  createdById: number;
  userList: User[] = [];
  taskList: Task[] = [];

}
