import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  currRandomUserPage = 0;
  constructor(private http: HttpClient) { }

  getRandomUserDetails() {
    return this.http.get(`${environment.apiUrl}?page=${this.currRandomUserPage}`);
  }

  updateRandomUserPage() {
    this.currRandomUserPage++;
  }
}