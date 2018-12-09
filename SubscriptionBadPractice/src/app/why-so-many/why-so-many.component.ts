import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-why-so-many',
  templateUrl: './why-so-many.component.html',
  styleUrls: ['./why-so-many.component.css']
})
export class WhySoManyComponent {
  public sourceObsCounter = 0;
  public secondObsCounter = 0;

  public sourceObs$ = new BehaviorSubject(0);
  public secondObs$ = new BehaviorSubject(0);

  constructor() {
    this.sourceObs$
      .subscribe(() => {
        this.sourceObsCounter += 1;
        this.secondObs$.subscribe(() => {
          this.secondObsCounter += 1;
        });
      });
  }

  emitSource() {
    this.sourceObs$.next(0);
  }

  emitSecondObs() {
    this.secondObs$.next(0);
  }
}
