import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.css']
})
export class WaterfallComponent {
  public sourceObsCounter = 0;
  public secondObsCounter = 0;

  public sourceObs = new BehaviorSubject(0);
  public secondObs = new BehaviorSubject(0);

  constructor() {
    this.sourceObs
      .pipe(delay(1000))
      .subscribe(() => {
        this.sourceObsCounter += 1;
        this.secondObs
          .pipe(delay(1000))
          .subscribe(() => {
            this.secondObsCounter += 1;
          });
      });
  }

  emitSource() {
    this.sourceObs.next(0);
  }

  emitSecondObs() {
    this.secondObs.next(0);
  }
}
