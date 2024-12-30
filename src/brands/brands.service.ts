import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: '',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    this.brands.push({
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime(),
    });
    return this.brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id == id);
    if (!brand) throw new NotFoundException();
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto, id };
        return brandDB;
      }

      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    const updatedBrands = this.brands.filter((brand) => brand.id != id);
    this.brands = updatedBrands;
    return this.brands;
  }
}
