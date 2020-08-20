import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  amountOfActiveToInactiveChanges = 0;
  amountOfInactiveToActiveChanges = 0;

  constructor() { }

  addActiveToInactiveChange() {
    this.amountOfActiveToInactiveChanges++;
    console.log(this.amountOfActiveToInactiveChanges);
  }

  addInactiveToActiveChange() {
    this.amountOfInactiveToActiveChanges++;
    console.log(this.amountOfInactiveToActiveChanges);
  }
}
