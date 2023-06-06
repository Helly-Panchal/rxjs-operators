import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, from, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent implements OnInit, OnDestroy {
  public sub$ = new Subject();
  public observableListArray: number[] = [];
  public observableListPromise: string[] = [];
  public observableListString: string[] = [];

  ngOnInit(): void {
    // from with array
    const observable1$ = from([1, 2, 3, 4, 5]);
    observable1$.pipe(takeUntil(this.sub$)).subscribe((res) => {
      this.observableListArray.push(res);
    });

    // from with promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolved after 3 seconds');
      }, 3000);
    });
    const observable2$ = from(promise);
    observable2$.pipe(takeUntil(this.sub$)).subscribe((res: any) => {
      this.observableListPromise.push(res);
    });

    // from with string
    const observable3$ = from('Helly');
    observable3$.pipe(takeUntil(this.sub$)).subscribe((res) => {
      this.observableListString.push(res);
    });
  }

  ngOnDestroy(): void {
    this.sub$.next(0);
    this.sub$.unsubscribe();
  }

}
