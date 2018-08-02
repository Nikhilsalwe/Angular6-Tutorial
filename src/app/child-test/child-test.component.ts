import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.css']
})
export class ChildTestComponent implements OnInit {

  @Input() public parentData;

  @Output() public childEvent = new EventEmitter();

  myData = `Hello to send Data to parent we use <b>eventEmitter</b> we create instance
            of class and emit that class in function created in child component. and then we create
            event on child comp like this (childEvent)="message=$event"
            and use message in interpolation in parent component`;
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey this message/data is comming for child.' + this.myData);
  }

}
