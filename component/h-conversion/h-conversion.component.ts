import { Component, EventEmitter, Output } from '@angular/core';
import { ConversionGrad } from 'src/app/models/conversion';

@Component({
  selector: 'app-h-conversion',
  templateUrl: './h-conversion.component.html',
  styleUrls: ['./h-conversion.component.scss']
})
export class HConversionComponent {
  grad: number = 0;
  tipo: string = '';

  @Output() convertFinal = new EventEmitter<ConversionGrad>();

  realizarC() {
    let conversion = new ConversionGrad(this.grad, this.tipo);
    this.convertFinal.emit(conversion);
  }
}
