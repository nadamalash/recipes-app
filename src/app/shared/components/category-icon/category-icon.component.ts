import { Component, Input } from '@angular/core';
import { Categories } from '../../../core/models/categories.enum';
 

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrl: './category-icon.component.scss',
})
export class CategoryIconComponent {
  @Input({ required: true }) category!: string;
  categories = Categories;
}
