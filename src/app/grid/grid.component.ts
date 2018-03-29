import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public gridData:any[] = [];
  constructor() { }

  ngOnInit() {
  }

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

}
