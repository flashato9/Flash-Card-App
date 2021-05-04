import { FlashCardsService } from 'src/app/Services/flash-cards.service';
import { FlashCard } from 'src/app/Models/flash-card.model';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'flash-card-form',
  templateUrl: './flash-card-form.component.html',
  styleUrls: ['./flash-card-form.component.scss'],
})
export class FlashCardFormComponent implements OnInit, OnDestroy {
  flashCardForm: FormGroup;
  counter: number = 4;

  private _subscription: Subscription;

  constructor(public flash_s: FlashCardsService) {
    this.flashCardForm = new FormGroup({
      question: new FormControl('', [Validators.required]),
      answer: new FormControl('', [Validators.required]),
    });
    this._subscription = this.flash_s.editing_$.subscribe((value) => {
      if (value) {
        const flashCard = this.flash_s.findFlashCard(this.flash_s.editingId);
        this.flashCardForm.controls['question'].setValue(flashCard.title);
        this.flashCardForm.controls['answer'].setValue(flashCard.content);
      }
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this._subscription.unsubscribe();

    //https://gist.github.com/btroncone/fe9d9aaf457f2ebd72c4624e34d664f8
  }
  submit() {
    if (
      this.flashCardForm.controls['question'].dirty &&
      this.flashCardForm.controls['question'].valid &&
      this.flashCardForm.controls['answer'].dirty &&
      this.flashCardForm.controls['answer'].valid
    ) {
      this.counter = this.counter + 1;
      const flashcard = new FlashCard(
        this.counter,
        <string>this.flashCardForm.controls['question'].value,
        <string>this.flashCardForm.controls['answer'].value,
        0
      );
      this.flash_s.addToList(flashcard);
      console.log('submit button clicked');
    } else {
      console.log('Form is invalid and cannot be submitted');
    }
  }
  update() {
    if (
      this.flashCardForm.controls['question'].valid &&
      this.flashCardForm.controls['answer'].valid
    ) {
      const flashcard = new FlashCard(
        this.flash_s.editingId,
        <string>this.flashCardForm.controls['question'].value,
        <string>this.flashCardForm.controls['answer'].value,
        0
      );
      this.flash_s.updateList(this.flash_s.editingId, flashcard);
      this.cancelEdit();
    } else {
      console.log('Form is invalid and cannot be submitted');
    }
  }
  reset() {
    this.flashCardForm.reset();
  }
  cancelEdit() {
    this.flash_s.disableEdit();
    this.reset();
  }
}
