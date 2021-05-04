import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardListComponent } from './flash-card-list.component';

describe('FlashCardListComponent', () => {
  let component: FlashCardListComponent;
  let fixture: ComponentFixture<FlashCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
