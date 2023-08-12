import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule
  ],
  exports: [HeaderComponent,
    FooterComponent,
    HomePageComponent, MainComponent, RegisterComponent, LoginComponent
  ]
})
export class CoreModule {
}
