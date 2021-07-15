import { ColorResponseModel } from './../models/colorResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = environment.apiUrl + 'colors/getall';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
