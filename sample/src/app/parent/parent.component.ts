import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,OnChanges {

  name=" ";
  isChild=true;
  constructor() {
    console.log("Parent constructor called.");
   }

  ngOnInit(): void {
    console.log("Parent Init called.");
  }

  ngOnChanges() {
    console.log("Parent OnChanges called.");
  }
  ngDoCheck() {
    console.log('Parent DoCheck');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

}
