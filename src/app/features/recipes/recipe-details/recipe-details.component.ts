import { Component, Input } from '@angular/core';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss',
})
export class RecipeDetailsComponent {
  @Input({ required: true }) ingredients!: string[];
  faCircle = faSquareCheck;
}
