import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-history-tasks',
  templateUrl: './history-tasks.component.html',
  styleUrls: ['./history-tasks.component.scss']
})
export class HistoryTasksComponent implements OnInit {


  pageTitle : string = "Performed tasks";


  constructor(
    public datastore:DatastoreService
  ) { }

  ngOnInit(): void {
  }

 
  clearHistory(){
    this.datastore.clear()
  }
  

}
