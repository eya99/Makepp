import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Step1Component } from './step1/step1.component';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';

import { ForumComponent } from './forum/forum.component';
import { ForumlistComponent } from './forumlist/forumlist.component';
import { DetailforumComponent } from './detailforum/detailforum.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

import {MatSliderModule} from '@angular/material/slider';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ColorPickerModule } from 'ngx-color-picker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { GragComponent } from './grag/grag.component';
import { IconDashComponent } from './icon-dash/icon-dash.component';
import { SplashDashComponent } from './splash-dash/splash-dash.component';
import { DatabaseComponent } from './database/database.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';
import { NewpageComponent } from './newpage/newpage.component';
import { AppthemeComponent } from './apptheme/apptheme.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DialogValidationComponent } from './DialogValidation/DialogValidation.component';
import { DialogCheckboxComponent } from './DialogCheckbox/DialogCheckbox.component';
// import { MatSelectModule } from '@angular/material/select';
// import { MatDialogModule } from '@angular/material/dialog';
const routes: Routes = [
  { path: '', redirectTo: '/Step1Component', pathMatch: 'full' },

];

@NgModule({
  declarations: [Step1Component, HeaderComponent, DashboardComponent, GragComponent, IconDashComponent, SplashDashComponent, DatabaseComponent, ForumComponent,ProfileClientComponent,DialogValidationComponent,DialogCheckboxComponent,
    ForumlistComponent,
    DetailforumComponent,
    NewpageComponent,
    AppthemeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    ColorPickerModule,
    RouterModule,
    NgxDropzoneModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    DragDropModule,
    MatSelectModule,
    MatDialogModule,




    ReactiveFormsModule,
  ],
})
export class ClientModule {}
