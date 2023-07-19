import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/home-page/home-page.component';
import { LoadingPageComponent } from './loading-page/loading-page-comp/loading-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component:LoadingPageComponent },
  {path: 'home', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
