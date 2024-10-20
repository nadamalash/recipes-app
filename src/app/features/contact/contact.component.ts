import { Component } from '@angular/core';
import { ArrowDirs } from '../../core/models/arrow-dirs.enum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  arrowDirs ?= ArrowDirs;
  btnLabel: string;
  isFormShow: boolean;
  constructor() {
    this.btnLabel = 'Send';
    this.isFormShow = true;
  }

  onSubmitClicked() {
    this.btnLabel = 'Please Wait ...';
    this.arrowDirs = undefined;
    setTimeout(() => {
      this.isFormShow = false;
    }, 2000);
  }
}
