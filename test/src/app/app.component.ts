import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import {AppDataService} from './app-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ChildComponent) child: any;

  title = 'test';
  public name ='This is from parent';
  public message="";
  value: string | undefined;
  ngAfterViewInit()
  {
    this.value=this.child.value;
  }
  constructor(private AppDataService: AppDataService) { }

  greetChild() {
    this.AppDataService.sendMessage('Hi from Parent');
  }
  appreciateChild() {
    this.AppDataService.sendMessage('Well Done child from Parent');
  }
}



