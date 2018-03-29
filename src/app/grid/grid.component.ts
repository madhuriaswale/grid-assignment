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
  
  constructor() { }

  addRow(data: any){
    let gridObj = data;
    this.gridData.push(gridObj);
  }


  removeRecord(index){
    this.gridData.splice(index,1);    
  }

  getVal(val,arrIndex,fieldName) {
    this.gridData.map(function(item,index) {
      console.log(index);
      if(index == arrIndex) {
        item[fieldName] = val.innerHTML;
      }
    })
  }

  getJSONData() {
    console.log(this.gridData);
    console.log(JSON.stringify(this.gridData));
    this.jsonRes = this.gridData;
  }

 
}
