import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  creationList: string[] = ['of', 'from', 'fromEvent', 'interval'];

  combinationList: string[] = ['concat', 'merge', 'zip', 'forkJoin'];

  transformationList: string[] = ['concatMap', 'map', 'mergeMap', 'switchMap'];

  filteringList: string[] = [
    'debounceTime',
    'distinctUntilChanged',
    'filter',
    'skip',
    'skipUntil',
    'take',
    'takeUntil',
  ];

  joinList: string[] = ['concatAll', 'mergeAll', 'switchAll'];

  utilityList: string[] = ['tap', 'delay'];
}
