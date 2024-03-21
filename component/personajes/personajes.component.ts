import { Component } from '@angular/core';
import { PersonajesSelect } from 'src/app/models/personajes';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {
  list : Array<PersonajesSelect> = []
  cont : number = 0;
  per(select : PersonajesSelect) {
    if (this.cont == 0) {
      this.list.push(select);
      this.cont = this.cont + 1;
    } else {
      this.list.pop();
      this.cont = 0;
    }
  }
}
