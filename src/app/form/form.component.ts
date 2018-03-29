import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor() { }

  

  @Output() userData : EventEmitter<any> = new EventEmitter<any>();

  saveData(user:any){
    this.userData.emit(user);
   }
}
