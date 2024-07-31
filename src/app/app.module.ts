import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeBookModule } from './recipe-book/recipe-book.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RoutingModule } from './routing.module';
import { RecipeService } from './recipe-book/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { authInterceptorInterceptor } from './auth/auth-interceptor.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AuthComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    ShoppingListModule,
    RecipeBookModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
  providers: [ShoppingListService, RecipeService, provideHttpClient(withInterceptors([authInterceptorInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
