import { Injectable } from '@angular/core';
import { } from 'googlemaps';
import { Subject } from 'rxjs';
import { UserDetailModel } from '../../../core/models/user-details.model';
import { GoogleMapConstants } from '../constant/google-map.constant';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  markerDetails!: UserDetailModel[]
  map!: google.maps.Map;
  bounds = new google.maps.LatLngBounds();
  markerDetails$ = new Subject<UserDetailModel>()

  constructor(
  ) { }

  

  initMap() {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 0,
        center: new google.maps.LatLng(GoogleMapConstants.centerOfMapLatLng),
      }
    );
  }

  
}
