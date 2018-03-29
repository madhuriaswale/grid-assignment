import { Component, Input } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  public gridData:any[] = [];
  public jsonRes;
  public newRecord;
  showAddRowForm: boolean = false;
  
  constructor() { }

  getRowData(data: any){
    let gridObj = data;
    this.gridData.push(gridObj);
  }

  showAddForm() {
    this.showAddRowForm = true;
  }

  cancelAddForm(status: boolean) {
    this.showAddRowForm = false;
  }


  removeRecord(index){
    this.gridData.splice(index,1);    
  }

  getVal(val,arrIndex,fieldName) {
    this.gridData.map(function(item,index) {
      if(index == arrIndex) {
        item[fieldName] = val.innerHTML;
      }
    })
  }

  getJSONData() {
    if(this.gridData.length){
      this.jsonRes = JSON.stringify(this.gridData);
    }
  }

 
}
