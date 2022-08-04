import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { UserDetailModel } from './model/user-detail.model';
import { GoogleMapsService } from './services/google-maps.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit, OnChanges {

  constructor(
    private googleMapsService: GoogleMapsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }
}
