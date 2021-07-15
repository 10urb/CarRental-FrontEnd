import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from './../models/carResponseModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl=environment.apiUrl+'cars/getall';
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
   return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
