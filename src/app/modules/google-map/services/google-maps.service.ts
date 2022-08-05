import { Injectable } from '@angular/core';
import { } from 'googlemaps';
import { UserDetailModel } from '../../../core/models/user-details.model';
import { GoogleMapConstants } from '../constant/google-map.constant';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  markerDetails!: UserDetailModel[]
  map!: google.maps.Map;
  bounds = new google.maps.LatLngBounds();

  constructor(
  ) { }

  setMarkerDetails(markerDetails: any) {
    this.markerDetails = markerDetails;
    this.setMarkersOnMap();
  }

  setMarkersOnMap() {
    const currMarkerDetails = this.markerDetails[this.markerDetails.length - 1];
    const mapLocation = new google.maps.LatLng(currMarkerDetails.lat, currMarkerDetails.long);
    this.bounds.extend(mapLocation);
    const locationMarker = this.setMarker(mapLocation);
    this.setInfoWindow(currMarkerDetails.thumbnail, currMarkerDetails.title, currMarkerDetails.first, currMarkerDetails.last, locationMarker);
    this.map.fitBounds(this.bounds);
  }

  initMap() {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 0,
        center: new google.maps.LatLng(GoogleMapConstants.centerOfMapLatLng),
      }
    );
  }

  setInfoWindow(userImage: string, userTitleName: string, userFirstName: string, userLastName: string, locationMarker: google.maps.Marker) {
    const infoWindow = new google.maps.InfoWindow({
      content: `<img src=${userImage}><b>${(userTitleName + userFirstName + userLastName)}`
    })
    google.maps.event.addListener(locationMarker, "click", () => { infoWindow.open(this.map, locationMarker) });
  }

  setMarker(mapLocation: google.maps.LatLng) {
    const marker = new google.maps.Marker({
      position: mapLocation,
      map: this.map,
      animation: google.maps.Animation.DROP,
    });
    return marker;
  }
}
