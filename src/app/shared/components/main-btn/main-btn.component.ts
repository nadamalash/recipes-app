import { Component, Input } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ArrowDirs } from '../../../core/models/arrow-dirs.enum';

@Component({
  selector: 'app-main-btn',
  templateUrl: './main-btn.component.html',
  styleUrl: './main-btn.component.scss',
})
export class MainBtnComponent {
  @Input({ required: true }) label!: string;
  @Input() arrowDir?: string;
  public arrowDirs
  public faArrowRight;
 
  constructor() {
    this.faArrowRight = faArrowRight;
    this.arrowDirs = ArrowDirs
  }
}
