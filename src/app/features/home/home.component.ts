import { Component } from '@angular/core';
import { Categories } from '../../core/models/categories.enum';
import { RecipeModel } from '../../core/models/recipe.model';
import { RecipeDifficulty } from '../../core/models/recipe-difficulty.enum';
import { ArrowDirs } from '../../core/models/arrow-dirs.enum';
import { slides } from '../../core/constants/slides';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  arrowDirs = ArrowDirs;
  categories = Object.keys(Categories);
  recipes: RecipeModel[];

  constructor() {
    this.recipes = [
      {
        title: 'Spaghetti Bolognese',
        time: '30',
        img: 'https://images.food52.com/PqbGKb6U130v9c9aE0OtkYbI4NE=/1200x675/49bbce59-a7ec-4c53-ab05-104d3ea6195f--spagetti-med-kottfarssas.jpg',
        servings: '4',
        difficulty: RecipeDifficulty.Easy,
        description:
          'A classic Italian pasta dish with a rich and flavorful meat sauce.',
        category: Categories.Lunch,
      },
      {
        title: 'Chicken Caesar Salad',
        time: '15',
        img: 'https://tastefullygrace.com/wp-content/uploads/2023/03/Blog-Chicken-Caesar-Salad-1-scaled.jpg',
        servings: '2',
        difficulty: RecipeDifficulty.Easy,
        description:
          'A healthy and refreshing salad with grilled chicken, croutons, and Caesar dressing.',
        category: Categories.Lunch,
      },
      {
        title: 'Beef Wellington',
        time: '120',
        img: 'https://cdn.prod.website-files.com/657a7aac36df076237527e36/658e021c326525fa7f055abd_6584a6d965e3b46120d96d3d_beefwellington_youtube_v2_1.webp',
        servings: '6',
        difficulty: RecipeDifficulty.Hard,
        description:
          'An elegant dish of beef tenderloin wrapped in puff pastry and served with a mushroom filling.',
        category: Categories.Lunch,
      },
      {
        title: 'Chocolate Soufflé',
        time: '60',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMl6VEHCapIcxY6vrQrIdeS5GDYFhgo07Pg&s',
        servings: '4',
        difficulty: RecipeDifficulty.Medium,
        description:
          'A light and airy chocolate dessert that’s perfect for impressing guests.',
        category: Categories.Dessert,
      },
      {
        title: 'Strawberry Cheesecake',
        time: '30',
        img: 'https://bakewithzoha.com/wp-content/uploads/2023/06/strawberry-cheesecake-featured.jpg',
        servings: '8',
        difficulty: RecipeDifficulty.Medium,
        description:
          'A creamy cheesecake with a graham cracker crust topped with fresh strawberries.',
        category: Categories.Dessert,
      },
      {
        title: 'Mango Smoothie',
        time: '10',
        img: 'https://everylittlecrumb.com/wp-content/uploads/mangosmoothie-5.jpg',
        servings: '2',
        difficulty: RecipeDifficulty.Easy,
        description:
          'A refreshing smoothie made with mangoes, yogurt, and a touch of honey.',
        category: Categories.Drink,
      },
      {
        title: 'Iced Coffee',
        time: '5',
        img: 'https://frostingandfettuccine.com/wp-content/uploads/2022/12/Caramel-Iced-Coffee-6.jpg',
        servings: '1',
        difficulty: RecipeDifficulty.Easy,
        description:
          'A chilled coffee beverage made with espresso and milk over ice.',
        category: Categories.Drink,
      },
      {
        title: 'Pancakes with Maple Syrup',
        time: '20',
        img: 'https://blogger.googleusercontent.com/img/a/AVvXsEj-7oS4y5juRu0WCcH1D2DqH1WeLkkoEW5Z338c1DR1kyxXhyqB_cE5lQlUSVUJSP-rKYMXQd9FFBDo97z7YENiP3ejvqtR2ZmjGjxyCRVfOixiAFMPjmvr58dtW1y3y4fUufyvBNyUFKqTzDBhsx85hSZiSpyxt3zRysCqYB1YKYyUn3y_3vURlLlS3w=s700',
        servings: '4',
        difficulty: RecipeDifficulty.Easy,
        description: 'Fluffy pancakes served with butter and maple syrup.',
        category: Categories.Breakfast,
      },
      {
        title: 'Avocado Toast',
        time: '10',
        img: 'https://www.eatingbirdfood.com/wp-content/uploads/2023/12/avocado-toast-hero-cropped.jpg',
        servings: '1',
        difficulty: RecipeDifficulty.Easy,
        description:
          'A quick and healthy breakfast option with smashed avocado on toasted bread.',
        category: Categories.Breakfast,
      },
    ];
  }
}
