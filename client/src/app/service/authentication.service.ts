import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {Observable} from "rxjs/Observable";
import {LOGIN} from "./api.url";
import {UserService} from "./user.service";
import {createOutput} from "@angular/compiler/src/core";
import "rxjs/add/operator/catch";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";

export const CURRENT_USER: string = 'currentUser';
export const JWT_TOKEN: string = 'jwt';

@Injectable()
export class AuthenticationService {

  private user: User;
  private authenticatedUser = new BehaviorSubject<any>(null);
  private currentUser = this.authenticatedUser.asObservable();

  constructor(private http: HttpClient,
              private router: Router,
              private userService: UserService) {}

  login(userModel: User): Observable<any> {
    return this.http.post(LOGIN.url, userModel, { observe: 'response' }).map(response => {
      localStorage.setItem(JWT_TOKEN, response.headers.get('authorization'));
      this.userService.getUserByEmail(userModel.email).subscribe((user: User) => {
        localStorage.setItem(CURRENT_USER, JSON.stringify(user));
        this.authenticatedUser.next(user);
      });
    }).catch((error: any) => {
      return Observable.throw(error);
    });
  }

  logout() {
    this.currentUser = null;
    this.authenticatedUser = new BehaviorSubject<any>(null);
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(CURRENT_USER);
    this.router.navigate(['/home']);
  }

  getCurrentUser() {
    if (!this.authenticatedUser.getValue()) {
      this.user = JSON.parse(localStorage.getItem(CURRENT_USER));
      if (this.user) {
        this.authenticatedUser.next(this.user);
      }
    }
    return this.authenticatedUser.asObservable();
  }
}
