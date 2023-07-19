import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    MainComponent
  ],
  imports: [
    CommonModule,AppRoutingModule,
  ],
  exports: [HeaderComponent,
    FooterComponent,
    HomePageComponent,MainComponent
  ]
})
export class CoreModule { }
