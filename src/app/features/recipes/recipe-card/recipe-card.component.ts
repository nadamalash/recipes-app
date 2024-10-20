import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../core/models/recipe.model';
import { faClock, faSignal, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input({ required: true }) recipe!: RecipeModel;
  faClock = faClock;
  faUser = faUser;
  faSignal = faSignal;
}
