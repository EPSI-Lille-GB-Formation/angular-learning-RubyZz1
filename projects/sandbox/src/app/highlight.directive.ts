import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.elementRef.nativeElement.style.backgroundcolor = "red";
  }
}
