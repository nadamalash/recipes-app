import { Component, Input } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { slides } from '../../../core/constants/slides';
@Component({
  selector: 'app-insta-sec',
  templateUrl: './insta-sec.component.html',
  styleUrl: './insta-sec.component.scss',
})
export class InstaSecComponent {
  slideConfig: object;
  faInstagram = faInstagram;
  slides: string[];
  constructor() {
    this.slideConfig = {
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2500,
            pauseOnHover: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2500,
            pauseOnHover: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    this.slides = slides;
  }
}
