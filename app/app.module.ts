import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { campingcomponent } from './camping.component';
import { campinginvoercomponent } from './campinginvoer.component';
import { campingregistratieinvoercomponent } from './registratie/registratie.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Blad1Component } from './blad1/blad1.component';
import { Blad2Component } from './blad2/blad2.component';

@NgModule({
  declarations: [
    AppComponent,
    campingcomponent,
    campinginvoercomponent,
    campingregistratieinvoercomponent,
    ParentComponent,
    ChildComponent,
    Blad1Component,
    Blad2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
