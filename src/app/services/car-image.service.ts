import { environment } from './../../environments/environment';
import { CarImageResponseModel } from './../models/carImageResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = environment.apiUrl + 'carimages/getall';
  constructor(private httpClient: HttpClient) {}

  getCarImages(): Observable<CarImageResponseModel> {
    return this.httpClient.get<CarImageResponseModel>(this.apiUrl);
  }
}
