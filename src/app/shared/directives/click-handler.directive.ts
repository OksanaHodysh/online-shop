import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickHandler]'
})
export class ClickHandlerDirective implements OnInit {

  @Input('appClickHandler') borderColor: string;

  public defaultBorderColor = 'transparent';

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit() {
    this.borderColor = this.borderColor
      ? this.borderColor
      : 'lightgreen';
  }

  @HostListener('click')
  handleClick() {
    if (this.el.nativeElement.style.borderColor !== this.borderColor) {
      this.setBorderColor(this.borderColor);
    } else {
      this.setBorderColor(this.defaultBorderColor);
    }
  }

  setBorderColor(color: string): void {
    this.render.setStyle(this.el.nativeElement, 'borderColor', color);
  }
}
