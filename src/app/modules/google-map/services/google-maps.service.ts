import { Inject, Injectable } from '@angular/core';
import { UserDetailModel } from '../../../core/models/user-details.model';
import { } from 'googlemaps';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  markerDetails!: UserDetailModel[]
  map!: google.maps.Map;
  bounds = new google.maps.LatLngBounds();

  constructor(
    @Inject(DOCUMENT) private document: HTMLDocument
  ) { }

  setMarkerDetails(markerDetails: any) {
    this.markerDetails = markerDetails;
    this.initMap();
    this.setMarkersOnMap();
  }

  setMarkersOnMap() {
    this.markerDetails.forEach(element => {
      const mapLocation = new google.maps.LatLng(element.lat, element.long);
      this.bounds.extend(mapLocation);
      const locationMarker = this.setMarker(mapLocation);
      this.setInfoWindow(element.thumbnail, element.title, element.first, element.last, locationMarker);
    });
    this.map.fitBounds(this.bounds);
  }

  initMap() {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 2,
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
