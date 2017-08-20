import { Component, OnInit } from '@angular/core';
import { MainNavbarTopComponent } from './main-navbar-top/main-navbar-top.component';
import { MainNavbarBottomComponent } from './main-navbar-bottom/main-navbar-bottom.component';


@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.sass'],
})
export class MainNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
