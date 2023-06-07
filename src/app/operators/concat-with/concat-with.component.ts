import { Component, OnInit } from '@angular/core';
import { Subject, concatWith, interval, map, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-concat-with',
  templateUrl: './concat-with.component.html',
  styleUrls: ['./concat-with.component.scss']
})
export class ConcatWithComponent implements OnInit {
  public sub$ = new Subject();
  public observableList: number[] = [];

  public ngOnInit(): void {
    const source1$ = interval(400).pipe(map(v => 'Channel 1 : Video #' + (v + 1)), take(5));
    const source2$ = interval(400).pipe(map(v => 'Channel 2 : Video #' + (v + 1)), take(3));
    const source3$ = interval(400).pipe(map(v => 'Channel 3 : Video #' + (v + 1)), take(4));

    source1$.pipe(concatWith(source2$, source3$), takeUntil(this.sub$)).subscribe((res: any) => {
      this.observableList.push(res);
    });
  }
}
