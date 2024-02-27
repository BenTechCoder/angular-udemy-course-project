
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'thai fried rice',
      'Best meal known to man',
      'https://th.bing.com/th/id/OIP.Y-uKPlLe6ncbBg28xy4mKgHaLG?w=186&h=279&c=7&r=0&o=5&pid=1.7',
      [new Ingredient('rice', 3)]
    ),
    new Recipe(
      'California Roll',
      'A tasty american take on sushi',
      'https://th.bing.com/th/id/OIP.UbT_12XF05s1rS2fHFNBRwHaE9?rs=1&pid=ImgDetMain',
      [new Ingredient("cream cheese", 1)]
      ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id) {
    return this.recipes[id];
  }
}
