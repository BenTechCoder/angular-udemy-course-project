import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}
  recipesEndpoint: string =
    'https://udemy-recipe-book-b70d9-default-rtdb.firebaseio.com/recipes.json';

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(this.recipesEndpoint, recipes)
      .subscribe((res) => console.log(res));
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(this.recipesEndpoint)
      .pipe(
        map((recipe) => {
          return recipe.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(recipes => this.recipesService.setRecipes(recipes))
      )
  }
}
