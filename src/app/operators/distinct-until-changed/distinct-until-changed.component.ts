import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, distinctUntilChanged, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit, OnDestroy {

  public sub$ = new Subject();
  public container: number[] = [];
  public observable$ = of(1, 1, 1, 2, 3, 3, 2, 4, 4, 5, 6, 6, 5, 7, 7, 9);

  ngOnInit(): void {
    this.observable$.pipe(takeUntil(this.sub$), distinctUntilChanged()).subscribe((res) => {
      this.container.push(res);
    })
  }
  ngOnDestroy(): void {
    this.sub$.next(0);
    this.sub$.unsubscribe();
  }

}
