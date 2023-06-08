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
    TimerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class OperatorsModule { }
