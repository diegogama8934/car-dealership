import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 1,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];
  getAllCars() {
    return this.cars;
  }
  getCarById(id: number) {
    return this.cars[id - 1];
  }
}
