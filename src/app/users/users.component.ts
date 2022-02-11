import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { UsersService } from '../shared/users.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  page: number = 1;

  constructor(public userServices: UsersService, public app: AppComponent) {}

  ngOnInit(): void {
    this.userServices.getUsers();
  }
}
