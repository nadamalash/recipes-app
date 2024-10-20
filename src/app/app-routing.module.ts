import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './features/about/about.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    title: 'Recipes',
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Categories',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
