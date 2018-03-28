import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'cornflowerblue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.cursor') cursor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cornflowerblue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cornflowerblue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
    this.backgroundColor = this.highlightColor;
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
