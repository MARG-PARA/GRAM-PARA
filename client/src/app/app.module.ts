import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriePageComponent } from './components/categorie-page/categorie-page.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import {ProductComponent} from './components/product/product.component'



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './components/home-page/home-page.component';



  

@NgModule({
  declarations: [
    AppComponent,

    CategoriePageComponent,
    ItemCardComponent,


    NavbarComponent,
    ProductComponent,
    HomePageComponent,



    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
