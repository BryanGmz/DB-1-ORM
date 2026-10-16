import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';
import { Repository } from 'typeorm';
import { AutorDto } from './dto/autor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private readonly autorRepository: Repository<Autor>,
  ) {}

  async create(createAutorDto: CreateAutorDto): Promise<AutorDto> {
    const autor = this.autorRepository.create(createAutorDto); // INSERT INTO autor (nombre) VALUES ('nombre del autor')
    const savedAutor = await this.autorRepository.save(autor);
    return {
      idAutor: savedAutor.idAutor,
      nombre: savedAutor.nombre,
    };
  }

  async findAll() {
    return await this.autorRepository.find({
      select: { idAutor: true, nombre: true },
      order: { nombre: 'ASC' },
    }); // SELECT id_autor, nombre FROM autor INNNER JOIN libro ON autor.id_autor = libro.id_autor ORDER BY nombre ASC
  }

  async findOne(id: number) {
    return await this.autorRepository.findOne({
      where: { idAutor: id },
      select: { idAutor: true, nombre: true },
    }); // SELECT id_autor, nombre FROM autor WHERE id_autor = id
  }

  async update(id: number, updateAutorDto: UpdateAutorDto) {
    await this.autorRepository.update(id, updateAutorDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.autorRepository.delete(id);
  }
}
