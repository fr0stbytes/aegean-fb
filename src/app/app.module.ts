import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FirebaseService} from './services/firebase.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainNavbarTopComponent } from './components/main-navbar/main-navbar-top/main-navbar-top.component';
import { MainNavbarBottomComponent } from './components/main-navbar/main-navbar-bottom/main-navbar-bottom.component';
// import { LoginModalComponent } from './components/main-navbar/login-modal/login-modal.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmailLoginComponent } from './components/email-login/email-login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EatAndDrinkComponent } from './components/eat-and-drink/eat-and-drink.component';
import { SightseeingComponent } from './components/sightseeing/sightseeing.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyB_5MVcpK9TM58VY-RTl9YqvwjkP4bFG-I',
  authDomain: 'guides-vue.firebaseapp.com',
  databaseURL: 'https://guides-vue.firebaseio.com',
  projectId: 'guides-vue',
  storageBucket: 'guides-vue.appspot.com',
  messagingSenderId: '721706570505'
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavbarComponent,
    MainNavbarTopComponent,
    MainNavbarBottomComponent,
    // LoginModalComponent,
    RestaurantsComponent,
    RestaurantComponent,
    LoginComponent,
    RegisterComponent,
    EmailLoginComponent,
    ProfileComponent,
    EatAndDrinkComponent,
    SightseeingComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [ FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
