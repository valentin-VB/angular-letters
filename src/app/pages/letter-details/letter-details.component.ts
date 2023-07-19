import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetterService } from 'src/app/services/letter.service';
import { Letter } from 'src/app/shared/types';
import { LetterFormComponent } from 'src/app/components/letter-form/letter-form.component';

@Component({
  selector: 'app-letter-details',
  templateUrl: './letter-details.component.html',
  styleUrls: ['./letter-details.component.scss'],
})
export class LetterDetailsComponent {
  letterForm!: LetterFormComponent;
  letterIndex!: number;
  letter!: Letter;
  isPreview: boolean = false;

  constructor(
    private letterService: LetterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLetterIndex();
    this.getLetter();
  }

  onFormSubmit(formValues: Letter) {
    if (formValues.id) {
      this.letterService.editLetter(formValues);
    } else {
      this.letterService.addLetter(formValues);
    }

    this.router.navigateByUrl('/');
  }

  getLetterIndex() {
    const letterId = this.getIdFromRouteParams();
    const index = this.letterService.getLetterIndexById(letterId);
    if (index >= 0) this.letterIndex = index;
  }

  getLetter() {
    const letterId = this.getIdFromRouteParams();
    const letter = this.letterService.getLetterById(letterId);
    if (letter) this.letter = letter;
  }

  getIdFromRouteParams() {
    return this.activatedRoute.snapshot.params['id'];
  }
}
