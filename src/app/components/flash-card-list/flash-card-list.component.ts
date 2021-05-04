import { Component, Input, OnInit } from '@angular/core';
import { FlashCardsService } from 'src/app/Services/flash-cards.service';

@Component({
  selector: 'flash-card-list',
  templateUrl: './flash-card-list.component.html',
  styleUrls: ['./flash-card-list.component.scss'],
})
export class FlashCardListComponent implements OnInit {
  constructor(public flash_s: FlashCardsService) {}

  ngOnInit(): void {}
}

//notes
//https://stackoverflow.com/questions/15292278/how-do-i-remove-an-array-item-in-typescript
