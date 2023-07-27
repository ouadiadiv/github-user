import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  maliite: number = 0 ;
  transform(value: any, limite?: number): any {
         if(!value){
          return null ;
         }
        this. maliite= (limite) ? limite : 30 ;
         return value.substr(0 , this. maliite) + '...' ;
  }

}
