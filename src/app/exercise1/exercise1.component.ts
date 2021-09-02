import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  //1stexer var
  stringByUser='';   
  stringByUser1='';   
  length1=0;         
  msg:string;           
  allowbutton=true;     
  enteredString=false;

  //2ndexer var
  nameOfUser='';
  ageOfUser='';
  obj:any=[{name:'', age:''}];
  hideBtn=false;

  //3rdexer var
  arr=[];
  namearr='';
  agearr='';

  //4thexer var
  oddEven='';
  msg1:any;
  check:string;

  constructor() { }

  ngOnInit(): void {
  }

  //1stexer func

  afterClick(){
    this.allowbutton=false;
    this.msg = 'length : ' + this.stringByUser.length;    //counts string length
    this.stringByUser1=this.stringByUser;
    this.stringByUser='';
    this.enteredString=true;
    return this.msg;
  }

  enable(){
    this.allowbutton=true;    //enable button
  }

  //2ndexer func

  getNameAge(){
    this.obj.push({name:this.nameOfUser, age:this.ageOfUser})     //display output
  }

  hideUnhideBtn(){
    this.hideBtn=!this.hideBtn;   //hide and unhide button
  }

  //3rdexer func

  getNameAgeArr(){
    this.arr.push({name:this.namearr, age:this.agearr});    //display output
  }

  //4thexer func

  oddEvenFunc(){
    this.msg1 = this.oddEven;
    if (this.msg1 % 2 == 0) return (this.check = 'EVEN');     //checks odd even
    else return (this.check = 'ODD');
  }

  getColor() {
    return this.check === 'EVEN' ? 'green' : 'red';     //decides color
  }

  clearInp(){
    this.oddEven="";
    this.msg1="";
  }

}
