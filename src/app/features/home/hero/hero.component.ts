import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ArrowDirs } from '../../../core/models/arrow-dirs.enum';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('cookingVideo') cookingVideo!: ElementRef;
  @ViewChild('heroText') heroText!: ElementRef;
  public arrowDirs;
  
  constructor() {
    this.arrowDirs = ArrowDirs;
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.cookingVideo.nativeElement.classList.add('grow');
      this.heroText.nativeElement.classList.add('animate');
    }, 100);
  }
}
