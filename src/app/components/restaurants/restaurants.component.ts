import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';﻿
import { FirebaseService } from '../../services/firebase.service'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.sass']
})
export class RestaurantsComponent implements OnInit {

  restaurants:any;

  constructor( private firebaseService: FirebaseService ) { }

  ngOnInit() {
    this.firebaseService.getRestaurants().subscribe (
      restaurants => {
        this.restaurants = restaurants;
      });
  }

}
