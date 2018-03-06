import {Task} from "./task.model";

export class Sprint{

  id: number;
  title: string;
  startDate: string;
  endDate: string;
  taskList: Task[];

}
