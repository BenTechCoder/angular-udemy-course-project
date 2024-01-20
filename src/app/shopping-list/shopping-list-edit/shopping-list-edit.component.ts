import { Component, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
@Output() ingredientEditEmitter = new EventEmitter<Ingredient>()
@ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
@ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;
emitIngredient(name:HTMLInputElement, amount:HTMLInputElement) {
this.ingredientEditEmitter.emit(new Ingredient(name.value, parseInt(amount.value)))
this.amountInputRef.nativeElement.value = "";
this.nameInputRef.nativeElement.value = "";
}


}
