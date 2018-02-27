import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";
import {ProjectService} from "../../service/project.service";
import {Project} from "../../model/project.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {


  ngOnDestroy(){
    this.saveUsers();
  }

  title: string;
  currentProject: Project;
  model: any = {};
  userList: User[] = [];
  selectedUserList: User[] = [];


  constructor(private userService: UserService,
              private projectService: ProjectService) {}

  ngOnInit() {
    this.title = "Loading Users...";
    this.currentProject = this.projectService.getCurrentProject();

    if (this.currentProject.userList != null){
      this.selectedUserList = this.currentProject.userList;
    }
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.userList = users;
      this.filterUserlist();
    },()=>{

    },()=>{
      this.title = "All Users:"
    });
  }

  filterUserlist(){
    for (let user of this.selectedUserList) {
      for (let filterIndex of this.userList) {
        if (user.id == filterIndex.id) {
          let index = this.userList.indexOf(filterIndex);
          this.userList.splice(index, 1);
        }
      }
    }

  }

  addUsers() {
    if(this.model.selectedUsers) {
      for(let user of this.model.selectedUsers) {
        let index = this.userList.indexOf(user);
        this.userList.splice(index, 1);
        this.selectedUserList.push(user);


      }
      this.model.selectedUsers = null;
    }

  }

  removeUser(user: User) {
    let index = this.selectedUserList.indexOf(user);
    this.selectedUserList.splice(index, 1);
    this.userList.push(user);
    this.model.selectedUsers = null;
  }

  saveUsers(){
    this.currentProject.userList = this.selectedUserList;
    this.projectService.saveCurrentUserListToProject(this.currentProject).subscribe(res =>{
      console.log(res);
    })


  }

}
