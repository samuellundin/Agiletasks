import {Component, OnInit, TemplateRef} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ProjectService} from "../../service/project.service";
import {Project} from "../../model/project.model";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-settings',
  templateUrl: './manage-settings.component.html',
  styleUrls: ['./manage-settings.component.css']
})
export class ManageSettingsComponent implements OnInit {

  currentProject: Project;
  modalRef: BsModalRef;
  config = {
    keyboard: true
  };

  constructor(private toastrService: ToastrService,
              private projectService: ProjectService,
              private modalService: BsModalService,
              private router: Router) {
  }

  ngOnInit() {
    this.currentProject = this.projectService.getCurrentProject();


  }

  updateProject() {
    this.projectService.updateProject(this.currentProject).subscribe(res => {
      console.log(res);
    }, () => {
      this.toastrService.error("Something went wrong, please try agin!", "Error!");
    }, () => {
      this.toastrService.success("You have update project with the name " + this.currentProject.projectName + "!", "Congratulations!");
    })
  }

  openDeleteModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  deleteProect() {
    this.projectService.deleteProject(this.currentProject.id).subscribe(res =>{
      console.log(res);
      this.modalRef.hide();
    }, ()=>{
      this.toastrService.error("Something went wrong, please try agin!", "Error!");
    },()=>{
      this.toastrService.success("You have deleted the project " + this.currentProject.projectName + "!", "Congratulations!");
      this.router.navigate(['dashboard']);

    });
  }
}
