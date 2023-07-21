import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/home-page/home-page.component';
import { LoadingPageComponent } from './loading-page/loading-page-comp/loading-page.component';
import { SplitComponent } from './split/split/split.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component:LoadingPageComponent },
  {path: 'home', component: HomePageComponent},
  {path: 'splits', component: SplitComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
