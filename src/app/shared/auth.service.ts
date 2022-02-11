import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(user:Users) {
    return this.httpClient.post(environment.apiUrl + '/login/token', user);
  }

  public logout() {
    sessionStorage.removeItem('JwtTOKEN');
    localStorage.removeItem('USERNAME');
  }

}
