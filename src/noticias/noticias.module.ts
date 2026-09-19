import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticiasService } from './noticias.service';
import { Noticia } from './entities/noticia.entity';
import { NoticiasController } from './noticias.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Noticia])],
  controllers: [NoticiasController],
  providers: [NoticiasService],
})
export class NoticiasModule {}
