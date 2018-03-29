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

  /**
   * Method to get data from form
   */
  getRowData(data: any){
    let gridObj = data;
    this.gridData.push(gridObj);
  }
  /**
   * Method to show form to add data in table
   */
  showAddForm() {
    this.showAddRowForm = true;
  }

    /**
     * Method to hide form
     * @param status 
     */
  cancelAddForm(status: boolean) {
    this.showAddRowForm = false;
  }

  /**
   * Method to remove the row from grid
   * @param index
   */
  removeRecord(index){
    this.gridData.splice(index,1);    
  }

    /**
     * Method to inline edit
     * @param val 
     * @param arrIndex 
     * @param fieldName 
     */
  getVal(val,arrIndex,fieldName) {
    this.gridData.map(function(item,index) {
      if(index == arrIndex) {
        item[fieldName] = val.innerHTML;
      }
    })
  }

    /**
     * Method to get data in json format
     */
  getJSONData() {
    if(this.gridData.length){
      this.jsonRes = JSON.stringify(this.gridData);
    }
  }

 
}
