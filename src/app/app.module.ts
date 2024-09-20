import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './layout/pages/home/home.component';
import { RecipesComponent } from './layout/pages/recipes/recipes.component';
import { NavbarComponent } from './layout/additions/navbar/navbar.component';
import { FooterComponent } from './layout/additions/footer/footer.component';
import { RecipeItemComponent } from './layout/pages/recipes/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './layout/pages/recipes/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    NavbarComponent,
    FooterComponent,
    RecipeItemComponent,
    RecipeDetailsComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
