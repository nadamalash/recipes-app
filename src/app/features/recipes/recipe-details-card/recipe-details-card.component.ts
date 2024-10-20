import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faClock, faSignal, faUser } from '@fortawesome/free-solid-svg-icons';
import { RecipeModel } from '../../../core/models/recipe.model';
import { ArrowDirs } from '../../../core/models/arrow-dirs.enum';

@Component({
  selector: 'app-recipe-details-card',
  templateUrl: './recipe-details-card.component.html',
  styleUrl: './recipe-details-card.component.scss',
})
export class RecipeDetailsCardComponent {
  @Output() showIngredsSection = new EventEmitter<boolean>();
  @Input({ required: true }) recipe!: RecipeModel;
  isIngredsSecShow: boolean;
  faClock = faClock;
  faUser = faUser;
  faSignal = faSignal;
  arrowDir: string;
  btnLabel: string;
  constructor() {
    this.arrowDir = ArrowDirs.topRight;
    this.btnLabel = 'View Ingredients';
    this.isIngredsSecShow = false;
  }

  onViewClicked() {
    this.isIngredsSecShow = !this.isIngredsSecShow;
    if (this.isIngredsSecShow) {
      this.arrowDir = ArrowDirs.topLeft;
      this.btnLabel = 'Hide Ingredients';
    } else {
      this.arrowDir = ArrowDirs.topRight;
      this.btnLabel = 'View Ingredients';
    }
    this.showIngredsSection.emit(this.isIngredsSecShow);
  }
}
