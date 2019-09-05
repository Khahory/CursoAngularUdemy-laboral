// Primero importamos lo que se requiere para los pipes
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'calculadoraName'
})
export class CalculadoraPipe implements PipeTransform {
  // dato | calculadoraName: dato2
  // param1                   param2

  transform(value: any, value2: any): any {
    const operaciones = `\n      Suma: ${value + value2} -\n      Resta ${value - value2}\n    `;
    return operaciones;
  }
}
