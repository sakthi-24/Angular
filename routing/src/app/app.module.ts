import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
