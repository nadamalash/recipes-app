import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
  @Input({ required: true }) recipes!: RecipeModel[];
}
