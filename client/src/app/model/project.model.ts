import {Sprint} from "./sprint.model";
import {User} from "./user.model";

export class Project {

  id: number;
  projectName: string;
  startDate: string;
  endDate: string;
  createdById: number;
  sprintList: Sprint[];
  userList: User[];

}
