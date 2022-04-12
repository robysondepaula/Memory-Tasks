import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatastoreService } from '../datastore.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.scss']
})
export class LiveFormDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public datastore:DatastoreService) { }

  ngOnInit(): void {
  }

  

  onYes(index: number){
    this.datastore.removeItem(index);
    
    
  }
  
 
  onClose(){
    this.dialog.closeAll();
  }

  
  
}
