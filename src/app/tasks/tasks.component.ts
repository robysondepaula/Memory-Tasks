import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatastoreService } from '../datastore.service';
import { LiveFormDialogComponent } from '../live-form-dialog/live-form-dialog.component';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {


  isCheckBoxChecked : boolean = false;
  pageTitle : string = "Memory Tasks";

  private task :string [] = [];

  entryTasks : FormControl = new FormControl(null, Validators.required);

  entry: FormGroup = new FormGroup({
    tasks : this.entryTasks
  })
  
  constructor(public datastore :DatastoreService, public dialog: MatDialog)  { }

  ngOnInit(): void {
  }


  
  onSubmit(event: Event){
    if(this.entry.valid){
      this.datastore.addItems(this.entryTasks.value);
      (event.currentTarget as HTMLFormElement).reset();
    }
  }

  onItemChecked(index: number){
    this.datastore.removeItem(index);
    
  }
  


  openDialog() {
    this.dialog.open(LiveFormDialogComponent);
  }



    public saveChanges(){
      window.localStorage.setItem('addItemArray', JSON.stringify(this.task));
    }
}


