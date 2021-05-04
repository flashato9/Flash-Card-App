//model
export type recall = 0 | 1 | -1; //0=> neutral, 1=> remembered, -1=>not remembered
export interface FlashCardI {
  id: number;
  title: string;
  content: string;
  remembered: recall;
}
export class FlashCard implements FlashCardI {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public remembered: recall
  ) {}
}
