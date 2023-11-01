import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VentasModule } from './ventas/ventas.module';
import { VentasController } from './ventas/ventas.controller';
import { VentasService } from './ventas/ventas.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule,
    VentasModule,
    TypeOrmModule.forRoot({ 
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'coral',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
})
],

  controllers: [
    AppController,
    VentasController],
  providers: [AppService,
  VentasService],
})
export class AppModule {}
