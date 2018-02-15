import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../model/user.model";

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(userList: User[], searchUser:string): User[] {
    if(searchUser) {
      return userList.filter((user: User) =>
        user.firstName.toLowerCase().indexOf(searchUser.toLowerCase()) !== -1 ||
        user.lastName.toLowerCase().indexOf(searchUser.toLowerCase()) !== -1
      );
    } else {
      return userList;
    }
  }

}
