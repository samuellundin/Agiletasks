import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";
import {IMyDpOptions} from "angular4-datepicker/src/my-date-picker/index";
import {Sprint} from "../../model/sprint.model";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'new-sprint-modal',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintModal implements OnInit {

  title: string;

  date: Date = new Date();
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy/mm/dd',
    disableUntil: {year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate() - 1},
  };
  public startDate: any = {
    date: {
      year: this.date.getFullYear(),
      month: this.date.getMonth() + 1,
      day: this.date.getDate()
    }
  };
  public endDate: any = {
    date: {
      year: this.date.getFullYear(),
      month: this.date.getMonth() + 1,
      day: this.date.getDate()
    }
  };

  public onClose: Subject<any>;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.onClose = new Subject();
  }

  handleCreateSprint() {
    let sprint: Sprint = new Sprint();
    sprint.title = this.title;
    sprint.startDate = this.startDate.formatted;
    sprint.endDate = this.endDate.formatted;
    sprint.taskList = [];
    this.onClose.next(sprint);
    this.bsModalRef.hide();
  }

}
