import { Component, NgModule, HostListener } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @myDecorator('by passing parameter')
  // aSimpleMethod() {
  //   console.log('Hey there')
  // }

  @log
  myMethod() {
    console.log('my method')
  }
}

// function myDecorator(message){
//   console.log('hey there its custome decorator', message);
// }

function log(target, name, descriptor){
  console.log(target, name, descriptor);
  //here we store original func in variable
  const original = descriptor.value;
  //do some manipulation
  descriptor.value = function() {
    console.log('THis function was')
  }

  return descriptor;
}


//this is custome decorator we have created here by passing the parameter
//else we hv angular
// 1) class decorator : -@Component and @NgModule
// 2) method decorator: @HostListener
// 3) property decorator" @Input and @output
// 4) parameter decorator: @Inject
