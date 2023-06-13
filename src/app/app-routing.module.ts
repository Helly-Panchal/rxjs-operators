import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfOperatorComponent } from './operators/of-operator/of-operator.component';
import { FromOperatorComponent } from './operators/from-operator/from-operator.component';
import { TakeComponent } from './operators/take/take.component';
import { TakeUntilComponent } from './operators/take-until/take-until.component';
import { DebounceTimeComponent } from './operators/debounce-time/debounce-time.component';
import { ConcatWithComponent } from './operators/concat-with/concat-with.component';
import { MergeComponent } from './operators/merge/merge.component';
import { MapComponent } from './operators/map/map.component';
import { IntervalComponent } from './operators/interval/interval.component';
import { TimerComponent } from './operators/timer/timer.component';
import { FilterComponent } from './operators/filter/filter.component';
import { TapComponent } from './operators/tap/tap.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { ForkJoinComponent } from './operators/fork-join/fork-join.component';

const routes: Routes = [
  { path: '', redirectTo: 'of', pathMatch: 'full' },
  { path: 'of', component: OfOperatorComponent },
  { path: 'from', component: FromOperatorComponent },
  { path: 'take', component: TakeComponent },
  { path: 'take-until', component: TakeUntilComponent },
  { path: 'debounce-time', component: DebounceTimeComponent },
  { path: 'concat', component: ConcatWithComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'map', component: MapComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'tap', component: TapComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'fork-join', component: ForkJoinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
