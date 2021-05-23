import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LsfactorComponent } from './lsfactor/lsfactor.component';
import { ShowLsComponent } from './lsfactor/show-ls/show-ls.component';
import { AddEditLsComponent } from './lsfactor/add-edit-ls/add-edit-ls.component';
import { CfactorComponent } from './cfactor/cfactor.component';
import { ShowCComponent } from './cfactor/show-c/show-c.component';
import { AddEditCComponent } from './cfactor/add-edit-c/add-edit-c.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PfactorComponent } from './pfactor/pfactor.component';
import { AddEditPComponent } from './pfactor/add-edit-p/add-edit-p.component';
import { ShowPComponent } from './pfactor/show-p/show-p.component';
import { RfactorComponent } from './rfactor/rfactor.component';
import { ShowRComponent } from './rfactor/show-r/show-r.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddEditProComponent } from './projects/add-edit-pro/add-edit-pro.component';
import { ShowProComponent } from './projects/show-pro/show-pro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import { SubsitesComponent } from './projects/subsites/subsites.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
// import { NgxMaskModule } from 'ngx-mask';
// import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    LsfactorComponent,
    ShowLsComponent,
    AddEditLsComponent,
    CfactorComponent,
    ShowCComponent,
    AddEditCComponent,
    PfactorComponent,
    AddEditPComponent,
    ShowPComponent,
    RfactorComponent,
    ShowRComponent,
    ProjectsComponent,
    AddEditProComponent,
    ShowProComponent,
    SubsitesComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [SharedService,
              MatDatepickerModule,
              MatNativeDateModule,{provide: MAT_DIALOG_DATA, useValue: {}},
              {provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
