import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.css']
})
export class WithLatestFromComponent {
  public sourceObsValue: string;
  public secondObsValue: string;

  public sourceObs$ = new BehaviorSubject('');
  public secondObs$ = new Subject<string>();

  constructor() {
    this.sourceObs$
      .pipe(withLatestFrom(this.secondObs$))
      .subscribe(([source, innerObs]) => {
        this.sourceObsValue = source;
        this.secondObsValue = innerObs;
      });
  }

  emitSource(value: string) {
    this.sourceObs$.next(value);
  }

  emitSecondObs(value: string) {
    this.secondObs$.next(value);
  }

}
