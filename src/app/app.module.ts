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
import { HtmlcommentsComponent } from './components/htmlcomments/htmlcomments.component';
import { HtmlelementsComponent } from './components/htmlelements/htmlelements.component';
import { HtmlheadingsComponent } from './components/htmlheadings/htmlheadings.component';
import { HtmlparagraphsComponent } from './components/htmlparagraphs/htmlparagraphs.component';
import { HtmlquotationandcitationelementsComponent } from './components/htmlquotationandcitationelements/htmlquotationandcitationelements.component';
import { HtmlstylesComponent } from './components/htmlstyles/htmlstyles.component';
import { HtmltextformattingComponent } from './components/htmltextformatting/htmltextformatting.component';

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
    HtmlattributesComponent,
    HtmlcommentsComponent,
    HtmlelementsComponent,
    HtmlheadingsComponent,
    HtmlparagraphsComponent,
    HtmlquotationandcitationelementsComponent,
    HtmlstylesComponent,
    HtmltextformattingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
