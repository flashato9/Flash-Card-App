import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlashCard } from 'src/app/Models/flash-card.model';
import { FlashCardsService } from 'src/app/Services/flash-cards.service';

@Component({
  selector: 'flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
})
export class FlashCardComponent implements OnInit {
  @Input('data') dataModel: FlashCard;

  showBelowHeader: boolean;

  constructor(public flash_s: FlashCardsService) {
    this.dataModel = new FlashCard(0, '', '', 0);
    this.showBelowHeader = false;
  }

  ngOnInit(): void {}
  delete() {
    this.flash_s.deleteFlashCard(this.dataModel.id);
  }
  edit() {
    this.flash_s.enableEdit(this.dataModel.id);
  }
}
