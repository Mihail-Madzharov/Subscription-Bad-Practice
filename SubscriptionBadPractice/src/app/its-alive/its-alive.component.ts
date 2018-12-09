import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-its-alive',
  templateUrl: './its-alive.component.html',
  styleUrls: ['./its-alive.component.css']
})
export class ItsAliveComponent {
  public sourceObsValue: string;
  public secondObsValue: string;

  public sourceObs$ = new BehaviorSubject('');
  public secondObs$ = new BehaviorSubject('');

  constructor() {
    this.sourceObs$
      .pipe(take(4))
      .subscribe((value) => {
        this.sourceObsValue = value;
        this.secondObs$.subscribe((innerValue) => {
          this.secondObsValue = innerValue;
        });
      });
  }

  emitSource(value: string) {
    this.sourceObs$.next(value);
  }

  emitSecondObs(value: string) {
    this.secondObs$.next(value);
  }
}
