import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomUserDetailComponent } from './components/random-user-detail/random-user-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsComponent } from '../modules/google-map/google-maps.component';
import { GoogleMapModule } from '../modules/google-map/google-map.module';



@NgModule({
  declarations: [
    RandomUserDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GoogleMapModule,
  ],
  exports: [
    RandomUserDetailComponent
  ]
})
export class CoreModule { }
