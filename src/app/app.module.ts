import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HTMLComponent } from './components/html/html.component';
import { AboutComponent } from './components/about/about.component';
import { LabelComponent } from './components/label/label.component';
import { SubstringPipe } from './pipes/substring.pipe';
import { HtmlbasicComponent } from './components/htmlbasic/htmlbasic.component';
import { HtmlattributesComponent } from './components/htmlattributes/htmlattributes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HTMLComponent,
    AboutComponent,
    LabelComponent,
    SubstringPipe,
    HtmlbasicComponent,
    HtmlattributesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
