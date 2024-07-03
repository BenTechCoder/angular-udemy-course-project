import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent
  ]
})
export class SharedModule {}
