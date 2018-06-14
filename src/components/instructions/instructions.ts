import { Component, Input, ViewChild, Renderer } from '@angular/core';

 
@Component({
  selector: 'instructions',
  templateUrl: 'instructions.html'
})
export class InstructionsComponent {
  @Input('instructions') instructions: Array<string>;
  @Input('show-instructions') show;
  @ViewChild("instruc") cardContent: any;
  accordionExapanded = false;

  icon: string = "fa-chevron-down";

  constructor(public renderer: Renderer) {
    console.log('Hello InstructionsComponent Component');
  }

  ngAfterViewInit() {
    console.log(this.instructions)
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "10px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "fa-chevron-down" ? "fa-chevron-up" : "fa-chevron-down";
  }

  gotIt(){
    this.toggleAccordion();
    setTimeout(()=>{
      this.show = false;
    },600)
  }

  showInstruc(e){
    this.show = true;
  }

}
