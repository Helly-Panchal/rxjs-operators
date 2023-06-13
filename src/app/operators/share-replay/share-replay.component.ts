import { Component, OnInit } from '@angular/core';
import { interval, shareReplay, take } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {

  public obs1Container: number[] = [];
  public obs2Container: number[] = [];
  public obs3Container: number[] = [];

  ngOnInit(): void {
    const shared$ = interval(2000).pipe(
      take(6),
      shareReplay(3)
    );

    shared$.subscribe(res => this.obs1Container.push(res));
    shared$.subscribe(res => this.obs2Container.push(res));

    setTimeout(() => {
      shared$.subscribe(res => this.obs3Container.push(res));
    }, 15000);
  }

}
