import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noticia } from './entities/noticia.entity';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';

@Injectable()
export class NoticiasService {
  constructor(
    @InjectRepository(Noticia)
    private readonly noticiaRepository: Repository<Noticia>,
  ) {}

  create(createNoticiaDto: CreateNoticiaDto) {
    const noticia = this.noticiaRepository.create(createNoticiaDto);
    return this.noticiaRepository.save(noticia);
  }

  findAll() {
    return this.noticiaRepository.find({
      order: { fechaCreacion: 'DESC' },
    });
  }

  async findOne(id: number) {
    const noticia = await this.noticiaRepository.findOneBy({ id });
    if (!noticia) {
      throw new NotFoundException(`Noticia con id ${id} no encontrada`);
    }
    return noticia;
  }

  async update(id: number, updateNoticiaDto: UpdateNoticiaDto) {
    const noticia = await this.noticiaRepository.preload({
      id,
      ...updateNoticiaDto,
    });
    if (!noticia) {
      throw new NotFoundException(`Noticia con id ${id} no encontrada`);
    }
    return this.noticiaRepository.save(noticia);
  }

  async remove(id: number) {
    const noticia = await this.findOne(id);
    return this.noticiaRepository.remove(noticia);
  }
}
