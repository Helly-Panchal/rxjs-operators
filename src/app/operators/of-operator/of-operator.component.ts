import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, of, takeLast, takeUntil } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.scss']
})
export class OfOperatorComponent implements OnInit, OnDestroy {
  public sub$ = new Subject();
  public observableListString: string[] = [];
  public observableListObject: object[] = [];
  public observableListNumber: number[] = [];

  ngOnInit(): void {
    // of with string
    const observable1$ = of('helly', 'arti', 'khushbu');
    observable1$.pipe(takeUntil(this.sub$)).subscribe((res) => {
      this.observableListString.push(res);
    });

    // of with object
    const observable2$ = of({ a: 'helly', b: 'arti', c: 'khushbu' });
    observable2$.pipe(takeUntil(this.sub$)).subscribe((res) => {
      this.observableListObject.push(res);
    });

    // of with number
    const observable3$ = of(1, 2, 3, 4, 5);
    observable3$.pipe(takeUntil(this.sub$)).subscribe((res) => {
      this.observableListNumber.push(res);
    });
  }

  public ngOnDestroy(): void {
    this.sub$.next(0);
    this.sub$.unsubscribe();
  }

}
