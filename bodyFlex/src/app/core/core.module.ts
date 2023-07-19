import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,
    FooterComponent,
    HomePageComponent

  ]
})
export class CoreModule { }
