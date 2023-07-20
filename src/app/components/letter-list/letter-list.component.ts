import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LetterService } from 'src/app/services/letter.service';
import { Letter } from 'src/app/shared/types';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.scss'],
})
export class LetterListComponent implements OnInit, OnDestroy {
  letters: Letter[] = [];
  subscription: Subscription = new Subscription();
  constructor(
    private letterService: LetterService,
    private dialog: MatDialog
  ) {}

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
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res === true) {
        this.letterService.deleteLetter(id);
      }
    });
  }
}
