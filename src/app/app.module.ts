import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuVerticalComponent,
    MenuHorizontalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
