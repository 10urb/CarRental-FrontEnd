import { CarImage } from './../models/carImage';
import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = environment.apiUrl + 'carimages/getall';
  constructor(private httpClient: HttpClient) {}

  getCarImages(): Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
  }
}
