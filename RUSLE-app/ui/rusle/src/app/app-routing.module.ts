import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { LsfactorComponent } from './lsfactor/lsfactor.component';
import { CfactorComponent } from './cfactor/cfactor.component';
import { PfactorComponent } from './pfactor/pfactor.component';
import { RfactorComponent } from './rfactor/rfactor.component';
import { ProjectsComponent } from './projects/projects.component'

const routes: Routes = [
  {path:'lsfactor', component:LsfactorComponent},
  {path:'cfactor', component:CfactorComponent},
  {path:'pfactor', component:PfactorComponent},
  {path:'rfactor', component:RfactorComponent},
  {path:'projects', component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
