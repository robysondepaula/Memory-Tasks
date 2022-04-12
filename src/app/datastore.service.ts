import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  forEach(arg0: (element: any) => void) {
    throw new Error('Method not implemented.');
  }
  splice(index: number, arg1: number) {
    throw new Error('Method not implemented.');
  }

  private task :string [] = [];

  constructor() {
    const saveData = window.localStorage.getItem('addItemArray');

    if (saveData != null){
      this.task = JSON.parse(saveData);
    }
   
   }

   

  addItems(message:string){
    this.task.push(message);
    this.saveChanges();
  }

  removeItem(i:number){
    this.task.splice(i, 1);
    this.saveChanges();
  }

  clear(){
    this.task = [];
    this.saveChanges();
  }

 getTasks(){
  return (this.task);
}


  private saveChanges(){
    window.localStorage.setItem('addItemArray', JSON.stringify(this.task));
  }

}
