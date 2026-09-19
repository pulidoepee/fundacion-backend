import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateContactoDto {
  @IsString()
  @MinLength(2)
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  asunto: string;

  @IsString()
  @MinLength(10)
  @MaxLength(500)
  mensaje: string;
}
