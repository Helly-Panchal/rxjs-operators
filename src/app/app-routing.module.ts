import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfOperatorComponent } from './operators/of-operator/of-operator.component';
import { FromOperatorComponent } from './operators/from-operator/from-operator.component';

const routes: Routes = [
  { path: '', redirectTo: 'operators', pathMatch: 'full' },
  { path: 'of', component: OfOperatorComponent },
  { path: 'from', component: FromOperatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
