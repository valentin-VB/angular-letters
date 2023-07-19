import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Letter } from 'src/app/shared/types';

@Component({
  selector: 'app-letter-form',
  templateUrl: './letter-form.component.html',
  styleUrls: ['./letter-form.component.scss'],
})
export class LetterFormComponent {
  @Input() letter: Letter;
  @Input() isPreview: boolean;
  @Output() formSubmit: EventEmitter<Letter> = new EventEmitter<Letter>();
  form!: FormGroup;

  constructor() {}

  public ngOnInit(): void {
    const {
      senderAddress = '',
      receiverAddress = [],
      blockA = [],
      subject = '',
      body = '',
      footNote = '',
    } = this.letter || {};

    this.form = new FormGroup({
      senderAddress: new FormControl(senderAddress, [Validators.required]),
      subject: new FormControl(subject),
      receiverAddress: new FormControl(receiverAddress),
      blockA: new FormControl(blockA),
      body: new FormControl(body, [Validators.required]),
      footNote: new FormControl(footNote),
    });
  }

  onSubmit() {
    const letter = {
      id: this.letter?.id,
      ...this.form.value,
    };

    if (this.form.valid) {
      this.formSubmit.emit(letter);
    } else {
      this.form.markAllAsTouched();
    }
  }

  buildLetter() {
    return this.form.value;
  }
}
