import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitComponent } from './split/split.component';
import { Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

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
    CommonModule,AppRoutingModule
  ],
  exports: [
    SplitComponent
  ]
})
export class SplitModule { }
