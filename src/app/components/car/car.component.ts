import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dataLoaded = false;
  cars: Car[] = [];
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}