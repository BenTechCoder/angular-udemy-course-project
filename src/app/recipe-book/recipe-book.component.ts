import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {

  /*
  1. Get recipe-item component to emit event when clicked
  2. Get that event data over to the recipe component
  3. pass that event to the recipe detail component
  */

  recipeEl: Recipe;
  show: boolean;
}
