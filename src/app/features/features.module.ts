import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './home/hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { AboutComponent } from './about/about.component';
import { AboutFirstSecComponent } from './about/about-first-sec/about-first-sec.component';
import { InstaSecComponent } from './about/insta-sec/insta-sec.component';
import { RecipeDetailsCardComponent } from './recipes/recipe-details-card/recipe-details-card.component';
import { AboutSecondSecComponent } from './about/about-second-sec/about-second-sec.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    RecipesComponent,
    HomeComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
    HeroComponent,
    CategoriesComponent,
    RecipeListComponent,
    AboutComponent,
    AboutFirstSecComponent,
    InstaSecComponent,
    RecipeDetailsCardComponent,
    AboutSecondSecComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
  ],
  exports: [
    RecipesComponent,
    HomeComponent,
    RecipeCardComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    AboutComponent,
    AboutFirstSecComponent,
    InstaSecComponent,
    RecipeDetailsCardComponent,
    ContactComponent,
  ],
})
export class FeaturesModule {}
