import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnDestroy {
  public sub$ = new Subject();
  public observableContainer: number[] = [];
  public observable1$ = interval(500);

  public ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  public start(): void {
    this.observableContainer = [];
    this.observable1$.pipe(takeUntil(this.sub$)).subscribe((res) => {
      this.observableContainer.push(res);
    });
  }

  public stop(): void {
    this.sub$.next(0);
  }

}
