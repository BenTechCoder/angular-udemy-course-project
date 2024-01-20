import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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
      'test recipe 2',
      'descriptions 2',
      'https://th.bing.com/th/id/R.b7e23b82ed782422905c7256b765eb4a?rik=uBKEWQuQ1ysbGA&pid=ImgRaw&r=0&adlt=strict'
    ),
  ];

  @Output() detailEmitter = new EventEmitter<Recipe>();

  emitDetail(recipes: Recipe) {
    this.detailEmitter.emit(recipes);
  }
  constructor() {}

  ngOnInit(): void {}

}
