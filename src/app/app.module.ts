import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeBookModule } from './recipe-book/recipe-book.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ShoppingListModule,
    RecipeBookModule,
    FormsModule,
    SharedModule
  ],
  exports: [],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
