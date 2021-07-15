import { CarImage } from './../../models/carImage';
import { CarImageService } from './../../services/car-image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  carImages: CarImage[] = [];
  dataLoaded = false;
  constructor(private carImageService: CarImageService) {}

  ngOnInit(): void {
    this.getCarImages();
  }

  getCarImages() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }
}
