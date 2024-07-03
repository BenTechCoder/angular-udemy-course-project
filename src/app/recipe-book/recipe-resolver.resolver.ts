import { DataStorageService } from '../shared/data-storage.service';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

export const RecipesResolver: ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const recipeService:RecipeService = inject(RecipeService);
  const dataStorageService:DataStorageService = inject(DataStorageService);
  const recipes = recipeService.getRecipes();
  if (recipes.length === 0) {
    return dataStorageService.fetchRecipes();
  } else {
    return recipes;
  }
};
