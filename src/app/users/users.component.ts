import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  page: number = 1;
  filter: string = '';

  constructor(public userServices: UsersService, public app: AppComponent) {}

  ngOnInit(): void {
    this.userServices.getUsers();
  }
}
