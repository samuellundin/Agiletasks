import { Injectable } from '@angular/core';
import {Project} from "../model/project.model";
import {HttpClient} from "@angular/common/http";
import {PROJECT} from "./api.url";

@Injectable()
export class ProjectService {

  constructor(private http : HttpClient) { }

  createProject(project: Project) {
    console.log(project);
    return this.http.post(PROJECT.url + '/new', project);
  }
}
