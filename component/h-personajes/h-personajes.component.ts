import { Component, EventEmitter, Output } from '@angular/core';
import { PersonajesSelect } from 'src/app/models/personajes';

@Component({
  selector: 'app-h-personajes',
  templateUrl: './h-personajes.component.html',
  styleUrls: ['./h-personajes.component.scss']
})
export class HPersonajesComponent {
  perso: string = '';

  @Output() personajeImg = new EventEmitter<PersonajesSelect>()

  eleccion() {
    let personajes = new PersonajesSelect(this.perso);
    this.personajeImg.emit(personajes);
  }
}
