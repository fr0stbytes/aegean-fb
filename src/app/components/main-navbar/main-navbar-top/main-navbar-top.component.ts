import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-main-navbar-top',
  templateUrl: './main-navbar-top.component.html',
  styleUrls: ['./main-navbar-top.component.sass'],
  providers: [NgbDropdownConfig, AngularFireAuth]
})

export class MainNavbarTopComponent implements OnInit {


  constructor(config: NgbDropdownConfig, public afAuth: AngularFireAuth) {
    // customize default values of dropdowns used by this component tree
    config.up = false;
    config.autoClose = true;
  }
  ngOnInit() {
  }

onLogoutClick() {
  this.afAuth.auth.signOut();
}

}
