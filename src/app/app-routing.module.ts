import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HTMLComponent } from './components/html/html.component';
import { HtmlattributesComponent } from './components/htmlattributes/htmlattributes.component';
import { HtmlbasicComponent } from './components/htmlbasic/htmlbasic.component';
import { LabelComponent } from './components/label/label.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'html', component: HTMLComponent},
  {path: 'about', component: AboutComponent},
  {path: 'label/:id', component: LabelComponent}, 
  {path: 'htmlbasic' , component: HtmlbasicComponent},
  {path: 'htmlattributes' , component: HtmlattributesComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
