import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component'
import { WorksComponent } from './components/works/works.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'/home'},
  {path: 'home',pathMatch: 'full', component: HomeComponent},
  {path: 'work',pathMatch: 'full', component: WorksComponent},
  {path: 'contact',pathMatch: 'full', component: ContactComponent},
  {path: '**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
