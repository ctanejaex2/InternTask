import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RandomUserModel } from '../models/random-user.model';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  currRandomUserPage = 0;
  constructor(private http: HttpClient) { }

  getRandomUserDetails() {
    return this.http.get<RandomUserModel>(`${environment.apiUrl}?page=${this.currRandomUserPage}`);
  }

  updateRandomUserPage() {
    this.currRandomUserPage++;
  }
}