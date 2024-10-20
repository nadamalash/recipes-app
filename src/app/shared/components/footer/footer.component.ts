import { Component } from '@angular/core';
import { Categories } from '../../../core/models/categories.enum';
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  categories: string[];
  faXTwittwer = faXTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedinIn;

  constructor() {
    this.categories = Object.values(Categories);
  }
}
