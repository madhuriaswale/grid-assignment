import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  public gridData:any[] = [];
  public jsonRes;
  constructor() { }

  addRow(){
    let gridObj = {
      firstName : "Madhuri",
      lastName : "Aswale",
      email: "madhuri.aswale10@gmail.com",
      phone : "123456789"
    };
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

  saveEditedVal(value) {

  }

  getJSONData() {
    console.log(this.gridData);
    console.log(JSON.stringify(this.gridData));
    this.jsonRes = this.gridData;
  }

}
