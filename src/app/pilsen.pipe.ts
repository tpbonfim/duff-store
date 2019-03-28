import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pilsen'
})
export class PilsenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
