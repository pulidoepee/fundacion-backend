import { Controller, Post, Body } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { CreateContactoDto } from './contacto.dto';

@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  enviarMensaje(@Body() createContactoDto: CreateContactoDto) {
    const { nombre, email, asunto, mensaje } = createContactoDto;
    return this.contactoService.enviarMensaje(nombre, email, asunto, mensaje);
  }
}
