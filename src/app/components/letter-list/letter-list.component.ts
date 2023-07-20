import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LetterService } from 'src/app/services/letter.service';
import { Letter } from 'src/app/shared/types';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss'],
})
export class LetterListComponent implements OnInit, OnDestroy {
  letters: Letter[] = [];
  subscription: Subscription = new Subscription();
  constructor(private letterService: LetterService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.letterService.getLettersObservable().subscribe((letters) => {
        this.letters = letters;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete(event: Event, id: string) {
    event.stopPropagation();
    this.letterService.deleteLetter(id);
  }
}
