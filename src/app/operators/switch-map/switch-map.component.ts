import { Component } from '@angular/core';
import { Subject, delay, from, of, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {
  public source$ = from(['Tech', 'Comedy', 'News']);
  public sub$ = new Subject();
  public container: string[] = [];

  public ngOnInit(): void {
    // ex-3 mergeMap
    this.source$.pipe(
      takeUntil(this.sub$),
      switchMap(data => this.getData(data)),
    ).subscribe((res) => {
      this.container.push(res);
    });
  }

  public ngOnDestroy(): void {
    this.sub$.next(0);
    this.sub$.unsubscribe();
  }

  public getData(data: string) {
    return of(data + 'Video Uploaded').pipe(delay(1000));
  }
}
