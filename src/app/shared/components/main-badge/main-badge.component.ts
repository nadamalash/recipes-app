import { Component, Input } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Categories } from '../../../core/models/categories.enum';

@Component({
  selector: 'app-main-badge',
  templateUrl: './main-badge.component.html',
  styleUrl: './main-badge.component.scss',
})
export class MainBadgeComponent {
  categories: string[];
  faChevronDown = faChevronDown;
  constructor() {
    this.categories = Object.values(Categories);
  }
}
