import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit, OnDestroy {
  public sub$ = new Subject();
  public observableListOne: number[] = [];

  public ngOnInit(): void {
    const observable1$ = interval(400);
    const timer$ = timer(3000);
    observable1$.pipe(takeUntil(timer$)).subscribe((res) => {
      this.observableListOne.push(res);
    });
  }

  public ngOnDestroy(): void {
    this.sub$.next(0);
    this.sub$.unsubscribe();
  }
}
