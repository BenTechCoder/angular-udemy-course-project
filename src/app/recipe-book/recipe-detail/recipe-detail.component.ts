import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input('recipe') recipe: Recipe;
  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}
  recipe: Recipe;

  ngOnInit() {
    this.route.params.subscribe((param:Params) => {
      let id = +param['id'];
      this.recipe = this.recipeService.getRecipe(id);
    });
  }

  addToShoppingList() {
    this.recipe.ingredients.forEach((ingredient) => {
      this.shoppingListService.updateList(ingredient);
    });
  }
}
