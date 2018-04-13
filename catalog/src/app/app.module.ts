import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PublicWebFrontModule } from './public-web-front/public-web-front.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PublicWebFrontModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
