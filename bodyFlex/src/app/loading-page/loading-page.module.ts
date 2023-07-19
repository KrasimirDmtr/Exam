import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './loading-page-comp/loading-page.component';



@NgModule({
  declarations: [LoadingPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingPageComponent
  ]
})
export class LoadingPageModule { }
