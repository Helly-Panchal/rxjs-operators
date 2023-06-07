import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit, OnDestroy {
  public sub$ = new Subject();
  public observableListOne: number[] = [];
  public observableListTwo: number[] = [];

  public ngOnInit(): void {
    const observable1$ = of(1, 2, 3, 4, 5);
    observable1$.pipe(take(1)).subscribe((res) => {
      this.observableListOne.push(res);
    });

    const observable2$ = interval(300);
    observable2$.pipe(take(5)).subscribe((res) => {
      this.observableListTwo.push(res);
    });
  }

  public ngOnDestroy(): void {
    this.sub$.next(0);
    this.sub$.unsubscribe();
  }
}
