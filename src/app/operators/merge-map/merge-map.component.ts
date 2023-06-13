import { Component, OnInit } from '@angular/core';
import { Observable, Subject, delay, from, interval, map, mergeAll, mergeMap, of, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
  public source$ = from(['Tech', 'Comedy', 'News']);
  public sub$ = new Subject();
  public container: string[] = [];

  public ngOnInit(): void {
    // ex-3 mergeMap
    this.source$.pipe(
      takeUntil(this.sub$),
      mergeMap((res) => {
        return of(`${res} video uploaded..`);
      }),
    ).subscribe((res) => {
      this.container.push(res);
    });
  }

  public ngOnDestroy(): void {
    this.sub$.next(0);
    this.sub$.unsubscribe();
  }
}
