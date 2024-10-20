import { Categories } from "./categories.enum";
import { RecipeDifficulty } from "./recipe-difficulty.enum";

export interface RecipeModel {
  title: string;
  time: string;
  img: string;
  servings: string;
  difficulty: RecipeDifficulty;
  description: string;
  category: Categories
}
