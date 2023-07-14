import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetterService } from 'src/app/services/letter.service';

@Component({
  selector: 'app-letter-details',
  templateUrl: './letter-details.component.html',
  styleUrls: ['./letter-details.component.scss'],
})
export class LetterDetailsComponent {
  letterIndex!: number;
  constructor(
    private letterService: LetterService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const letterId = this.activatedRoute.snapshot.params['id'];
    console.log('letterId:', this.activatedRoute);
    const index = this.letterService.getLetterIndexById(letterId);
    if (index >= 0) this.letterIndex = index;
  }
}
