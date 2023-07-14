import { Component } from '@angular/core';
import { LetterService } from 'src/app/services/letter.service';
import { Letter } from 'src/app/shared/types';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss'],
})
export class LetterListComponent {
  letters: Letter[] = [];
  constructor(private letterService: LetterService) {}

  ngOnInit(): void {
    this.letters = this.letterService.getLetters();
  }
}
