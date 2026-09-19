import { IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateNoticiaDto {
  @IsString()
  @MaxLength(200)
  titulo!: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  resumen?: string;

  @IsString()
  contenido!: string;

  @IsString()
  @IsOptional()
  imagen?: string;
}
