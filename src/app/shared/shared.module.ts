import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryIconComponent } from './components/category-icon/category-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainBtnComponent } from './components/main-btn/main-btn.component';
import { TitleWordIconComponent } from './components/title-word-icon/title-word-icon.component';
import { AppearAnimationDirective } from './directives/appearAnimation.directive';
import { MainBadgeComponent } from './components/main-badge/main-badge.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CategoryIconComponent,
    MainBtnComponent,
    TitleWordIconComponent,
    AppearAnimationDirective,
    MainBadgeComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    CategoryIconComponent,
    MainBtnComponent,
    TitleWordIconComponent,
    AppearAnimationDirective,
    MainBadgeComponent,
    NotFoundComponent,
  ],
})
export class SharedModule {}
