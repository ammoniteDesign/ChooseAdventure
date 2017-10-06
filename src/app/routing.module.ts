import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScumQuarterComponent }   from './scum-quarter/scum-quarter.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'scum-quarter',  component: ScumQuarterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}