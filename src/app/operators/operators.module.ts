import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { TakeComponent } from './take/take.component';
import { TakeUntilComponent } from './take-until/take-until.component';



@NgModule({
  declarations: [
    OfOperatorComponent,
    FromOperatorComponent,
    TakeComponent,
    TakeUntilComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OperatorsModule { }
