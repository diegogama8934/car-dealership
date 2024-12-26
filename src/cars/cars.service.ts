import { Injectable, NotFoundException } from '@nestjs/common';

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
    const car = this.cars[id - 1];
    if (!car) throw new NotFoundException(`Car with ID '${id}' doesn´t exist`);
    return car;
  }

  saveCar(newCar) {
    const car = [...this.cars, newCar];
    return car;
  }
}
