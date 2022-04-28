import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardOneComponent } from './card-one/card-one.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsetComponent } from './skillset/skillset.component';

const routes: Routes = [
  { path: '', component: CardOneComponent },
  { path: 'skillset', component: SkillsetComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
