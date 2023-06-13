import { Component, OnInit } from '@angular/core';
import { Subject, forkJoin, from, takeUntil } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {
  public sub$ = new Subject();
  public container: string[] = [];

  public obs1$ = from(['Tech', 'Comedy', 'News']);
  public obs2$ = from([1, 2, 3, 4, 5]);

  public ngOnInit(): void {
    forkJoin([this.obs1$, this.obs2$]).pipe(takeUntil(this.sub$)).subscribe((res: any) => {
      this.container.push(res);
    })
  }
}
