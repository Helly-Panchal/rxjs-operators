import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, map, of, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit, OnDestroy {
  public beforeMapValues: number[] = [];
  public afterMapValues: number[] = [];
  public source$ = of(1, 2, 3, 4, 5);
  public sub$ = new Subject();

  public ngOnInit(): void {
    this.source$.pipe(takeUntil(this.sub$),
      tap((val) => {
        'Before map : ' + val;
        this.beforeMapValues.push(val)
      }),
      map(val => val + 100),
      tap((val) => {
        'After map : ' + val;
        this.afterMapValues.push(val)
      }),
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.sub$.next(0);
    this.sub$.unsubscribe();
  }
}
