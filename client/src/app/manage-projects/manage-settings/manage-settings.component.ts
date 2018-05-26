import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ProjectService} from "../../service/project.service";
import {Project} from "../../model/project.model";

@Component({
  selector: 'app-manage-settings',
  templateUrl: './manage-settings.component.html',
  styleUrls: ['./manage-settings.component.css']
})
export class ManageSettingsComponent implements OnInit {

  currentProject: Project;





  constructor(private toastrService: ToastrService,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.currentProject = this.projectService.getCurrentProject();


  }

  updateProject(){
    this.projectService.updateProject(this.currentProject).subscribe(res =>{
      console.log(res);
    },()=> {
      this.toastrService.error("Something went wrong, please try agin!", "Error!");
    }, ()=>{
      this.toastrService.success("You have update project with the name " + this.currentProject.projectName +"!", "Congratulations!");
    })
  }
}
