import { Component, Input } from '@angular/core';
import { Letter } from 'src/app/shared/types';

@Component({
  selector: 'app-letter-preview',
  templateUrl: './letter-preview.component.html',
  styleUrls: ['./letter-preview.component.scss'],
})
export class LetterPreviewComponent {
  @Input() letter: Letter;

  getMapsLink() {
    const encodedAddress = encodeURIComponent(this.letter.senderAddress);
    return `https://www.google.com/maps?q=${encodedAddress}`;
  }
}
