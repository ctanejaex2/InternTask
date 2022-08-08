import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GoogleMapsService } from 'src/app/modules/google-map/services/google-maps.service';
import { RandomUserModel } from '../../models/random-user.model';
import { UserDetailModel } from '../../models/user-details.model';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-random-user-detail',
  templateUrl: './random-user-detail.component.html',
  styleUrls: ['./random-user-detail.component.css']
})
export class RandomUserDetailComponent implements OnInit {

  userDetails: UserDetailModel[] = []

  constructor(
    private randomUserService: RandomUserService,
    private googleMapsService: GoogleMapsService,
  ) { }

  ngOnInit(): void {
    this.googleMapsService.initMap();
  }

  getRandomUserDetails() {
    this.randomUserService.updateRandomUserPage();
    this.randomUserService.getRandomUserDetails().pipe(
      map((data: any) => data.results[0])
    ).subscribe((data: RandomUserModel) => {
      const currUser = new UserDetailModel();

      currUser.lat = data.location.coordinates.latitude;
      currUser.long = data.location.coordinates.longitude;
      currUser.first = data.name.first;
      currUser.last = data.name.last;
      currUser.title = data.name.title;
      currUser.thumbnail = data.picture.thumbnail;
      this.userDetails.push(currUser);

      this.googleMapsService.markerDetails$.next(currUser);
    });
  }
}
