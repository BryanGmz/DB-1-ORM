import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorModule } from './autor/autor.module';
import { Autor } from './autor/entities/autor.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT ?? 5432),
      username: process.env.DB_USER ?? 'postgres',
      password: process.env.DB_PASS ?? 'lab2026',
      database: process.env.DB_NAME ?? 'biblioteca',
      entities: [Autor /*Autor, Categoria, Libro, Lector, Prestamo*/], // todas las tablas mapeadas
      synchronize: true, // la base ya existe: TypeORM NO la modifica
      logging: true, // muestra en consola cada SQL que genera
    }),
    AutorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
