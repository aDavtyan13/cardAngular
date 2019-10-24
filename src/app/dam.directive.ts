import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appDam]'
})
export class DamDirective {

  elem = this.elementRef.nativeElement;
  constructor(
    private elementRef: ElementRef) {
  }
  
  @HostListener('keyup', ['$event.target.value'])
  onkeyup(dam) {
    if(dam.length>0){
      this.elem.value = this.elem.value.match(new RegExp('[0-9]{1,4}', 'g')).join(" ");
     
    } 

  }

}


