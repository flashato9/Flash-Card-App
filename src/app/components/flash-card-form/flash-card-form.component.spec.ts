import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardFormComponent } from './flash-card-form.component';

describe('FlashCardFormComponent', () => {
  let component: FlashCardFormComponent;
  let fixture: ComponentFixture<FlashCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
