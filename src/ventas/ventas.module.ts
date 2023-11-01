import { Module } from '@nestjs/common';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { ProductEntity } from './product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, CategoryEntity])
  ]
  controllers: [VentasController],
  providers: [VentasService]
})
export class VentasModule {}
