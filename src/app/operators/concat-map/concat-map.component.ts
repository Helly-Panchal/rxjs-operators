import { Component } from '@angular/core';
import { Subject, concatAll, concatMap, from, map, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {
  public source$ = from(['Tech', 'Comedy', 'News']);
  public sub$ = new Subject();
  public sourceObsContainer: string[] = [];
  public containerAfterSubscribe: string[] = [];
  public sourceObsContainer2: string[] = [];
  public sourceObsContainer3: string[] = [];
  public sourceObsContainer4: string[] = [];


  public ngOnInit(): void {
    // ex-1 map
    this.source$.pipe(
      takeUntil(this.sub$),
      map((res) => {
        return of(`${res} video uploaded..`);
      }))
      .subscribe((res: any) => {
        this.sourceObsContainer.push(res);
        res.subscribe((output$: any) => {
          this.containerAfterSubscribe.push(output$);
        })
      });

    // ex-2 map + concatAll
    this.source$.pipe(
      takeUntil(this.sub$),
      map((res) => {
        return of(`${res} video uploaded..`);
      }),
      concatAll()
    ).subscribe((res) => {
      this.sourceObsContainer2.push(res);
    });

    // ex-3 concatMap
    this.source$.pipe(
      takeUntil(this.sub$),
      concatMap((res) => {
        return of(`${res} video uploaded..`);
      }),
    ).subscribe((res) => {
      this.sourceObsContainer3.push(res);
    });
  }
}
