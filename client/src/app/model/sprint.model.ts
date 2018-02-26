import {Task} from "./task.model";

export class Sprint{

  id: number;
  name: string;
  startDate: string;
  endDate: string;
  taskList: Task[];

}
