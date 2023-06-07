import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent {
  public sub$ = new Subject();
  public observableList: number[] = [];

  public ngOnInit(): void {
    this.sub$.pipe(debounceTime(300)).subscribe((res: any) => {
      this.observableList.push(res);
    });
  }

  public search(val: string) {
    this.sub$.next(val);
  }

}
