import { Injectable } from '@angular/core';
import { Letter } from '../shared/types';
import { BehaviorSubject, skip } from 'rxjs';
import { generateUUID } from '../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  private static readonly LOCAL_STORAGE_KEY = 'Letters';
  private letters$: BehaviorSubject<Letter[]>;
  constructor() {
    this.letters$ = new BehaviorSubject<Letter[]>(this.loadDataFromStorage());
    this.letters$.pipe(skip(1)).subscribe((data) => {
      this.saveDataToStorage(data);
    });
  }

  loadDataFromStorage(): Letter[] {
    const data = localStorage.getItem(LetterService.LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveDataToStorage(data: Letter[]) {
    localStorage.setItem(LetterService.LOCAL_STORAGE_KEY, JSON.stringify(data));
  }

  getLetters() {
    return [...this.letters$.value];
  }

  getLetterById(letterId: string) {
    return this.letters$.value.find(({ id }) => id === letterId);
  }

  getLetterIndexById(letterId: string) {
    return this.letters$.value.findIndex(({ id }) => id === letterId);
  }

  addLetter(letter: Letter) {
    letter.id = generateUUID();
    const letters = [...this.letters$.value];
    this.letters$.next([...letters, letter]);
  }

  editLetter(editing: Letter) {
    const updatedLetters = [...this.letters$.value].map((letter) =>
      editing.id === letter.id ? editing : letter
    );
    this.letters$.next(updatedLetters);
  }

  deleteLetter(letterId: string) {
    const filteredLetters = this.letters$.value.filter(
      ({ id }) => id !== letterId
    );
    this.letters$.next(filteredLetters);
  }
}
