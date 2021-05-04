import { FlashCard } from './../Models/flash-card.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlashCardsService {
  flashCards: FlashCard[] = [];
  editing_$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  editingId: number;

  constructor() {
    this.flashCards.push(
      new FlashCard(
        1,
        'Question 1: Hello?',
        "Is it me you're looking forIs it me you're looking forIs it me you're looking forIs it me you're looking forIs it me you're looking forIs it me you're looking forIs it me you're looking forIs it me you're looking for",
        0
      )
    );
    this.flashCards.push(
      new FlashCard(2, 'Question 2: Beat it!', 'Just Beat it!', 0)
    );
    this.flashCards.push(
      new FlashCard(3, 'Question 3: BANANAS!', 'B-A-N-A-N-A-S!', 0)
    );
    this.flashCards.push(
      new FlashCard(4, 'Question 4: GTA!', 'Grand Theft AUto', 0)
    );
    this.editingId = -1;
  }
  addToList(flashcard: FlashCard) {
    this.flashCards.push(flashcard);
  }
  updateList(id: number, flashcard: FlashCard) {
    const index = this.flashCards.findIndex((value) => {
      return value.id === id;
    });
    this.flashCards[index] = flashcard;
  }
  deleteFlashCard(id: number) {
    this.flashCards = this.flashCards.filter((value) => {
      return value.id !== id;
    });
  }
  enableEdit(id: number) {
    this.editingId = id;
    this.editing_$.next(true);
  }
  disableEdit() {
    this.editingId = -1;
    this.editing_$.next(false);
  }
  findFlashCard(id: number): FlashCard {
    return this.flashCards.filter((value) => {
      return value.id === id;
    })[0];
  }
}
