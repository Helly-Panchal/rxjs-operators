import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, from, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  public sub$ = new Subject();
  public observableListOne!: string;
  public observableListTwo!: string;
  public observableListThree: string[] = [];

  public ngOnInit(): void {
    const observable1$ = interval(500);
    observable1$.pipe(map(data => 'Video : ' + (data + 1)), take(10)).subscribe((res: any) => {
      this.observableListOne = res;
    });

    const observable2$ = interval(500);
    observable2$.pipe(map(data => (data + 1) * 3), take(10)).subscribe((res: any) => {
      this.observableListTwo = res;
    });

    const observable3$ = from([
      { id: 1, Name: 'Helly' },
      { id: 2, Name: 'Arti' },
      { id: 3, Name: 'Khushbu' },
      { id: 4, Name: 'Mohit' },
      { id: 5, Name: 'Jainik' },
      { id: 6, Name: 'Kunj' },
      { id: 7, Name: 'Darsh' },
    ]);

    observable3$.pipe(map(data => data.Name), take(10)).subscribe((res: any) => {
      this.observableListThree.push(res);
    });
  }

  public ngOnDestroy(): void {
  }
}
