import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';



@NgModule({
  declarations: [
    OfOperatorComponent,
    FromOperatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OperatorsModule { }
