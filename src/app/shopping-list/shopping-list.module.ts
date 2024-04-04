import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListComponentComponent } from './shopping-list-component/shopping-list-component.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListComponentComponent,
    ShoppingListEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShoppingListComponent,
    ShoppingListComponentComponent,
    ShoppingListEditComponent
  ]
})
export class ShoppingListModule { }
