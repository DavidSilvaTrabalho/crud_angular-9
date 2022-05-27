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
   console.log(this.testeN)
   console.log("teste")
   this.el.nativeElement.color = '#d72845'
  }

}
