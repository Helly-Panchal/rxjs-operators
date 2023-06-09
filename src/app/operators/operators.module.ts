import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { FormsModule } from '@angular/forms';
import { ConcatWithComponent } from './concat-with/concat-with.component';
import { MergeComponent } from './merge/merge.component';
import { MapComponent } from './map/map.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    OfOperatorComponent,
    FromOperatorComponent,
    TakeComponent,
    TakeUntilComponent,
    DebounceTimeComponent,
    ConcatWithComponent,
    MergeComponent,
    MapComponent,
    IntervalComponent,
    TimerComponent,
    FilterComponent,
    TapComponent,
    ConcatMapComponent,
    MergeMapComponent,
    SwitchMapComponent,
    ForkJoinComponent,
    DistinctUntilChangedComponent,
    ShareReplayComponent,
    IntroductionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class OperatorsModule { }
