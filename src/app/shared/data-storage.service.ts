import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.model';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService,
    private authService: AuthService
  ) {}
  
  recipesEndpoint: string =
    `https://udemy-recipe-book-b70d9-default-rtdb.firebaseio.com/recipes.json?auth=${this.authService.getUserID()}`;

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(this.recipesEndpoint, recipes)
      .subscribe((res) => console.log(res));
  }

  fetchRecipes() {
    console.log(this.recipesEndpoint)
    console.log(this.authService.getUserID())
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
