import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageModule } from './loading-page/loading-page.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http'
import { UserModule } from './user/user.module';
import { SplitModule } from './split/split.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingPageModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    SplitModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
