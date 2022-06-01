import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class FooterDirectiveDirective implements OnInit {

  @Input("ngForIn") testeN!: number[]


  constructor(private el:ElementRef) {
  }
  
  ngAfterViewInit(){}
  
  ngOnInit() {
   this.el.nativeElement.color = '#d72845'
  }

}
