import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  
  users: Users[];

  constructor(private httpClient: HttpClient) { }
  
  getUsers() {
    return this.httpClient.get(environment.apiUrl + '/customers/allcustomers')
      .toPromise()
      .then(
        result => {
          console.log('From service........');
          console.log(result);
          this.users = result as Users[];
        },
        error => {
          console.log(error);
        }
      );
  }

}
