import {
  Component,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}
  @Output() ingredientEditEmitter = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    this.shoppingListService.updateList(
      new Ingredient(name.value, parseInt(amount.value))
    );
    this.amountInputRef.nativeElement.value = '';
    this.nameInputRef.nativeElement.value = '';
  }
}
