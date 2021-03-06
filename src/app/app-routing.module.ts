import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HTMLComponent } from './components/html/html.component';
import { HtmlattributesComponent } from './components/htmlattributes/htmlattributes.component';
import { HtmlbasicComponent } from './components/htmlbasic/htmlbasic.component';
import { HtmlcommentsComponent } from './components/htmlcomments/htmlcomments.component';
import { HtmlelementsComponent } from './components/htmlelements/htmlelements.component';
import { HtmlheadingsComponent } from './components/htmlheadings/htmlheadings.component';
import { HtmlparagraphsComponent } from './components/htmlparagraphs/htmlparagraphs.component';
import { HtmlquotationandcitationelementsComponent } from './components/htmlquotationandcitationelements/htmlquotationandcitationelements.component';
import { HtmlstylesComponent } from './components/htmlstyles/htmlstyles.component';
import { HtmltextformattingComponent } from './components/htmltextformatting/htmltextformatting.component';
import { LabelComponent } from './components/label/label.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'html', component: HTMLComponent},
  {path: 'about', component: AboutComponent},
  {path: 'label/:id', component: LabelComponent}, 
  {path: 'htmlbasic' , component: HtmlbasicComponent},
  {path: 'htmlattributes' , component: HtmlattributesComponent},
  {path: 'htmlcomments' , component: HtmlcommentsComponent},
  {path: 'htmlelements' , component:HtmlelementsComponent},
  {path: 'htmlheadings' , component:HtmlheadingsComponent},
  {path: 'htmlparagraphs' , component:HtmlparagraphsComponent},
  {path: 'htmlquotationandcitationelements' , component: HtmlquotationandcitationelementsComponent},
  {path: 'htmlstyles' , component:HtmlstylesComponent},
  {path: 'htmltextformatting' , component:HtmltextformattingComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
