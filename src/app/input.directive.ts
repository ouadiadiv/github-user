import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  constructor(private el : ElementRef) { }

@HostListener('blur') onBlur(){
  let value :string = this.el.nativeElement.value ;
  this.el.nativeElement.value= value.toUpperCase() ;
  
}

}
