import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id == id);
    if (!car) throw new NotFoundException(`Car with ID '${id}' doesn´t exist`);
    return car;
  }

  createCar(newCar) {
    const car = [...this.cars, newCar];
    return car;
  }
}
