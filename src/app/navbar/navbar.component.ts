import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from '../app.component';
import { AuthService } from '../shared/auth.service';
import { Users } from '../shared/users';
import { UsersComponent } from '../users/users.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public app:AppComponent, public auth: AuthService) {}

  ngOnInit(): void {
    
  }
}
