import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitComponent } from './split/split.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { CurrentSplitComponent } from './current-split/current-split.component';

// const routes: Routes = [
//   {
//     path: 
//   }
// ]

@NgModule({
  declarations: [
    SplitComponent,
    CurrentSplitComponent
  ],
  imports: [
    CommonModule,AppRoutingModule,CoreModule
  ],
  exports: [
    SplitComponent
  ]
})
export class SplitModule { }
