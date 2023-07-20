import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitComponent } from './split/split.component';
import { Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 
//   }
// ]

@NgModule({
  declarations: [
    SplitComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SplitComponent
  ]
})
export class SplitModule { }
