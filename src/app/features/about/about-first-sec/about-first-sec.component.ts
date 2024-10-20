import { Component, Input } from '@angular/core';
import { ArrowDirs } from '../../../core/models/arrow-dirs.enum';

@Component({
  selector: 'app-about-first-sec',
  templateUrl: './about-first-sec.component.html',
  styleUrl: './about-first-sec.component.scss',
})
export class AboutFirstSecComponent {
  @Input() isFirst: boolean;
  @Input() isBtnVisible: boolean;
  arrowDirs = ArrowDirs;
  constructor() {
    this.isFirst = false;
    this.isBtnVisible = false;
  }
}
