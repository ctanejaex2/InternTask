import { Component, OnInit } from '@angular/core';
import { } from 'googlemaps';
import { UserDetailModel } from 'src/app/core/models/user-details.model';
import { GoogleMapsService } from './services/google-maps.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  constructor(
    private googleMapsService: GoogleMapsService
  ) { }

  ngOnInit(): void {
    this.googleMapsService.markerDetails$.subscribe((data: UserDetailModel) => {
      this.setMarkerDetails(data);
    });
  }

  setMarkerDetails(markerDetails: UserDetailModel) {
    this.setMarkersOnMap(markerDetails);
  }

  setMarkersOnMap(markerDetails: UserDetailModel) {
    const currLocation = { 'lat': Number(markerDetails.lat), 'lng': Number(markerDetails.long) };
    const mapLocation = new google.maps.LatLng(currLocation);
    this.googleMapsService.bounds.extend(mapLocation);
    const locationMarker = this.setMarker(mapLocation);
    this.setInfoWindow(markerDetails.thumbnail, markerDetails.title, markerDetails.first, markerDetails.last, locationMarker);
    this.googleMapsService.map.fitBounds(this.googleMapsService.bounds);
  }

  setInfoWindow(userImage: string, userTitleName: string, userFirstName: string, userLastName: string, locationMarker: google.maps.Marker) {
    const infoWindow = new google.maps.InfoWindow({
      content: `<img src=${userImage}><b>${(userTitleName + userFirstName + userLastName)}`
    })
    google.maps.event.addListener(locationMarker, "click", () => { infoWindow.open(this.googleMapsService.map, locationMarker) });
  }

  setMarker(mapLocation: google.maps.LatLng) {
    const marker = new google.maps.Marker({
      position: mapLocation,
      map: this.googleMapsService.map,
      animation: google.maps.Animation.DROP,
    });
    return marker;
  }
}
