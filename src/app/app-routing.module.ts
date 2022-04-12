import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryTasksComponent } from './history-tasks/history-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {
    path:'tasks',
    component:TasksComponent
  },
  {
    path:'',
    redirectTo:'tasks', 
    pathMatch:'full'
  },
  {
    path:'historytasks',
    component:HistoryTasksComponent
  }, 

  {
    path:'aboutUs', 
    component:AboutUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
