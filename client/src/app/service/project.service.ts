import { Injectable } from '@angular/core';
import {Project} from "../model/project.model";
import {HttpClient} from "@angular/common/http";
import {PROJECT} from "./api.url";

@Injectable()
export class ProjectService {

  currentProject: Project;

  constructor(private http : HttpClient) { }


  getProjectsByUserId(id: number) {
    return this.http.get(PROJECT.url + '/' + id);
  }


  createProject(project: Project) {

    return this.http.post(PROJECT.url + '/new', project);
  }

  getCurrentProject(){
    return this.currentProject;
  }
  setCurrentProject(project: Project){
    this.currentProject = project;
  }


  saveCurrentUserListToProject(project: Project) {
    return this.http.put(PROJECT.url + '/save_userlist', project);
  }
}
