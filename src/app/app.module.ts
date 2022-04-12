import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TasksComponent } from './tasks/tasks.component';
import { HistoryTasksComponent } from './history-tasks/history-tasks.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { LiveFormDialogComponent } from './live-form-dialog/live-form-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HistoryTasksComponent,
    AboutUsComponent,
    LiveFormDialogComponent, 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatListModule, 
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
 

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
