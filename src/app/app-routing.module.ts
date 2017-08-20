import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SightseeingComponent } from './components/sightseeing/sightseeing.component';
import { EatAndDrinkComponent } from './components/eat-and-drink/eat-and-drink.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmailLoginComponent } from './components/email-login/email-login.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'email-login',
    component: EmailLoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'sightseeing',
    component: SightseeingComponent
  },
  {
    path: 'eat-and-drink',
    component: EatAndDrinkComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];

@NgModule ({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule{}
