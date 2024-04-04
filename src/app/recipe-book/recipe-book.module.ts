import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from '../routing.module';
import { DetailLoadComponent } from './recipe-detail/detail-load/detail-load.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeService } from './recipe.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DetailLoadComponent,
    RecipeEditComponent,
  ],
  imports: [CommonModule, SharedModule, RoutingModule, ReactiveFormsModule],
  exports: [
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ]
})
export class RecipeBookModule {}
