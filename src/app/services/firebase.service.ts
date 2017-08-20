import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';﻿


@Injectable()
export class FirebaseService {

  restaurants: FirebaseListObservable<any[]>;
  restaurant: FirebaseObjectObservable<any[]>;

  constructor(private af:AngularFireDatabase) { }

  getRestaurants() {
    this.restaurants = this.af.list('/Restaurants') as FirebaseListObservable<Restaurant[]>
    return this.restaurants;
  }

  getRestaurantDetails(id) {
    this.restaurant = this.af.object('/Restaurants/' +id) as FirebaseObjectObservable<Restaurant>
    return this.restaurant;
  }

}

interface Restaurant {
  $key?:string;
  company?:string;
  address?:string;
  short_description?:string;
  picture?:string;
}
