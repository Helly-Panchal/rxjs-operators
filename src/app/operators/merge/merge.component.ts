import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, map, merge, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit, OnDestroy {
  public sub$ = new Subject();
  public observableList: number[] = [];

  public ngOnInit(): void {
    const source1$ = interval(300).pipe(map(v => 'Channel 1 : Video #' + (v + 1)), take(5));
    const source2$ = interval(200).pipe(map(v => 'Channel 2 : Video #' + (v + 1)), take(3));
    const source3$ = interval(400).pipe(map(v => 'Channel 3 : Video #' + (v + 1)), take(4));

    const final$ = merge(source1$, source2$, source3$);
    final$.pipe(takeUntil(this.sub$)).subscribe((res: any) => {
      this.observableList.push(res);
    });
  }

  public ngOnDestroy(): void {
    this.sub$.next(0);
    this.sub$.unsubscribe();
  }
}
