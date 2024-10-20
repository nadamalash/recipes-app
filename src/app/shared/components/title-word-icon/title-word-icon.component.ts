import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-word-icon',
  templateUrl: './title-word-icon.component.html',
  styleUrl: './title-word-icon.component.scss',
})
export class TitleWordIconComponent {
  @Input({ required: true }) word!: string;
}
