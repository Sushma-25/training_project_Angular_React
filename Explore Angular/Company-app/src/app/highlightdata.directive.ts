import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlightdata]'
})
export class HighlightdataDirective {
  defaultColor: string = "red";


  constructor(private element: ElementRef) {
    console.log("Highlight diretive is used to highlight the data");
  }

  @HostListener("mouseenter")
  applyColorOnMouse() {

    //this.element.nativeElement.style.color= this.defaultColor;
    //this.element.nativeElement.style.background= "blue";
    this.element.nativeElement.style.innerHTML= "Changed from directive";


  }
  @HostListener("mouseleave")
  removeColorOnMouse() {

    this.element.nativeElement.style.background = null

  }
}
