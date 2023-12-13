import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeBookModule } from './recipe-book/recipe-book.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ShoppingListModule,
    RecipeBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
