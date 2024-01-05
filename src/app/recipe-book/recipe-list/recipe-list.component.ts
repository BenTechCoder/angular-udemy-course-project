import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'descriptions',
      'https://th.bing.com/th/id/OIP.TsYH1c4KWAjcJtgLKh2i7AHaE8?w=282&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    ),
    new Recipe(
      'test recipe',
      'descriptions',
      'https://th.bing.com/th/id/OIP.TsYH1c4KWAjcJtgLKh2i7AHaE8?w=282&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
