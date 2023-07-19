import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './loading-page-comp/loading-page.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [LoadingPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LoadingPageComponent
  ]
})
export class LoadingPageModule { }
