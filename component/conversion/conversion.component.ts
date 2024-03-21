import { Component } from '@angular/core';
import { ConversionGrad } from 'src/app/models/conversion';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {
  list: Array<ConversionGrad> = []
  ConversionEmit(conversion: ConversionGrad) {
    this.list.push(conversion);
  }
}
