import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScumQuarterComponent }   from './scum-quarter.component';
//import { HeroesComponent }      from './heroes.component';
//import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'scum-quarter',  component: ScumQuarterComponent },
 // { path: 'detail/:id', component: HeroDetailComponent },
 //{ path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}