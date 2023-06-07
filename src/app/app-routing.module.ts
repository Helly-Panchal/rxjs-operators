import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfOperatorComponent } from './operators/of-operator/of-operator.component';
import { FromOperatorComponent } from './operators/from-operator/from-operator.component';
import { TakeComponent } from './operators/take/take.component';
import { TakeUntilComponent } from './operators/take-until/take-until.component';
import { DebounceTimeComponent } from './operators/debounce-time/debounce-time.component';
import { ConcatWithComponent } from './operators/concat-with/concat-with.component';

const routes: Routes = [
  { path: '', redirectTo: 'of', pathMatch: 'full' },
  { path: 'of', component: OfOperatorComponent },
  { path: 'from', component: FromOperatorComponent },
  { path: 'take', component: TakeComponent },
  { path: 'take-until', component: TakeUntilComponent },
  { path: 'debounce-time', component: DebounceTimeComponent },
  { path: 'concat', component: ConcatWithComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
