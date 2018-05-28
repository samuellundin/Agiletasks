import { Injectable } from '@angular/core';
import {Project} from "../model/project.model";
import {HttpClient} from "@angular/common/http";
import {PROJECT} from "./api.url";

@Injectable()
export class ProjectService {

  currentProject: Project;

  constructor(private http : HttpClient) { }


  getProjectsByUserId(id: number) {
    return this.http.get(PROJECT.url + '/all/' + id);
  }

  getAssignedProjectsByUserId(id: number) {
    return this.http.get(PROJECT.url + '/assigned/' + id);
  }

  updateProject(project: Project) {
    return this.http.put(PROJECT.url, project);
  }

  createProject(project: Project) {
    return this.http.post(PROJECT.url + '/', project);
  }

  getCurrentProject(){
    return this.currentProject;
  }
  setCurrentProject(project: Project){
    this.currentProject = project;
  }

  deleteProject(id: number){
    return this.http.delete(PROJECT.url + "/" + id);
  }

}
