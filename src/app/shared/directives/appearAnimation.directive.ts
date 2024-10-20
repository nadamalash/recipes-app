import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAppearAnimation]',
})
export class AppearAnimationDirective implements OnInit, AfterViewInit {
  @Input() isFirstSec: boolean;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.isFirstSec = false;
  }
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'translateY(10rem)'
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'transition',
      'opacity 0.9s ease, transform 0.9s ease'
    );
  }
  ngAfterViewInit(): void {
    if (this.isFirstSec) {
      this.animate();
    }
  }

  checkVisibility(): boolean {
    const rect = this.element.nativeElement.getBoundingClientRect();
    return rect.top <= 800;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.isFirstSec) {
      const isSectionVisible = this.checkVisibility();
      if (isSectionVisible) {
        this.animate();
      }
    }
  }

  animate() {
    setTimeout(() => {
      this.renderer.setStyle(this.element.nativeElement, 'opacity', '1');
      this.renderer.setStyle(
        this.element.nativeElement,
        'transform',
        'translateY(0)'
      );
    }, 100);
  }
}
