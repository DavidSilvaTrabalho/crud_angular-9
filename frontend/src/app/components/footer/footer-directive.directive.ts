import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class FooterDirectiveDirective implements OnInit {

  @Input("ngForIn") testeN!: number[]


  constructor() {
  }
  
  ngAfterViewInit(){}
  
  ngOnInit() {
   console.log(this.testeN)
   console.log("teste")
  }

}
