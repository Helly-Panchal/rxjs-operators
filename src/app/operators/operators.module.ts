import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OfOperatorComponent,
    FromOperatorComponent,
    TakeComponent,
    TakeUntilComponent,
    DebounceTimeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class OperatorsModule { }
