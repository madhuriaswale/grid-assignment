import { Component,Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor() { }

  @ViewChild('userForm') showFormRef;
  @Input() showForm:boolean = false;
  @Output() userData : EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelAddForm : EventEmitter<any> = new EventEmitter<any>();

  saveData(user:any){
    this.userData.emit(user);
    this.showFormRef.reset();
  }

  cancelForm() {
    this.cancelAddForm.emit(false);
  }
}
