import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { GoogleMapsService } from 'src/app/modules/google-map/services/google-maps.service';
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
  }

  getRandomUserDetails() {
    this.randomUserService.updateRandomUserPage();
    this.randomUserService.getRandomUserDetails().subscribe((data: any) => {
      const currUser = new UserDetailModel();

      currUser.lat = data.results[0].location.coordinates.latitude;
      currUser.long = data.results[0].location.coordinates.longitude;
      currUser.first = data.results[0].name.first;
      currUser.last = data.results[0].name.last;
      currUser.title = data.results[0].name.title;
      currUser.thumbnail = data.results[0].picture.thumbnail;
      this.userDetails.push(currUser);
      
      this.googleMapsService.setMarkerDetails(this.userDetails);
    });
  }
}
