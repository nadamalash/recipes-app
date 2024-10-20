import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Categories } from '../../../core/models/categories.enum';
import { ArrowDirs } from '../../../core/models/arrow-dirs.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public faBars;
  public faChevronDown;
  public isNavBarExpanded;
  public isNavBarScrolled;
  public categories;
  public arrowDirs; 
  @ViewChild('catMenu') catMenu!: ElementRef;
  @ViewChild('catMenuLink') catMenuLink!: ElementRef;

  constructor(private viewportScroller: ViewportScroller) {
    this.faBars = faBars;
    this.faChevronDown = faChevronDown;
    this.isNavBarExpanded = false;
    this.isNavBarScrolled = false;
    this.categories = Object.values(Categories);
    this.arrowDirs = ArrowDirs;
  }

  toggleNavbar() {
    this.isNavBarExpanded = !this.isNavBarExpanded;
    
    // Change categories menu style
    const menu = this.catMenu.nativeElement;
    const menuLink = this.catMenuLink.nativeElement;

    if (this.isNavBarExpanded) {
      menu.classList.remove('dropdown-menu');
      menu.classList.add('border-0','shadow-none','mt-0','py-0','list-unstyled','collapse');
      menuLink.setAttribute('data-bs-toggle', 'collapse');
    } else {
      menu.classList.add('dropdown-menu');
      menu.classList.remove('border-0','shadow-none','mt-0','py-0','list-unstyled','collapse');
      menuLink.setAttribute('data-bs-toggle', 'dropdown');
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = this.viewportScroller.getScrollPosition()[1]; // vertical
    if (scrollPosition > 0) {
      this.isNavBarScrolled = true;
    } else {
      this.isNavBarScrolled = false;
    }
  }
}
