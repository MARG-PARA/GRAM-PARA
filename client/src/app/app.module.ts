import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ProductComponent} from './components/product/product.component'

import { CarouselPauseComponent } from './components/carousel-pause/carousel-pause.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPauseComponent,
    NavbarComponent,
    ProductComponent

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
