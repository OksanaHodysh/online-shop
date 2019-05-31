import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPaintBackground]'
})
export class PaintBackgroundDirective implements OnInit {
  @Input('appPaintBackground') highlightColor = 'aquamarine';
  @Input() defaultColor = 'transparent';

  @HostBinding('style.backgroundColor') background: string;

  @HostListener('mouseenter', ['$event'])
  enter(event: MouseEvent) {
    console.log(event);
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: MouseEvent) {
    console.log(event);
    this.background = this.defaultColor;
  }

  ngOnInit(): void {
    this.background = this.defaultColor;
  }
}
