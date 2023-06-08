import { Component } from '@angular/core';
import { Subject, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  public sub$ = new Subject();
  public observableContainer: number[] = [];
  public observable1$ = timer(2000, 500);

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
