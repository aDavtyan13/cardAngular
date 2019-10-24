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
  onKeyup(value) {
    this.elem.value.style 

    // alert('dam');
  }

}


