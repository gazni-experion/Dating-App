import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

user:string;
  constructor() {
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('USERNAME');

  }
}
