import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Output() uitvoerCreate = new EventEmitter<string>();
childInvoerModel = '';
onChildInvoer() {
  console.log("Data verstuurd: " + this.childInvoerModel);
  this.uitvoerCreate.emit(this.childInvoerModel);
  this.childInvoerModel = '';
}
}
