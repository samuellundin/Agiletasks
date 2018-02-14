import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PROJECT} from "./api.url";

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjectsByUserId(id: number) {
    return this.http.get(PROJECT.url + '/' + id);
  }

}
