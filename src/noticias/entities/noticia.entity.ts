import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('noticias')
export class Noticia {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 200 })
  titulo!: string;

  @Column({ length: 300, nullable: true })
  resumen!: string;

  @Column('text')
  contenido!: string;

  @Column({ nullable: true })
  imagen!: string;

  @CreateDateColumn()
  fechaCreacion!: Date;
}
