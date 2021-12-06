import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-child',
  template: `
  <h1>{{"Hello, "+ name}}</h1>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

@Input('parentData') public name: any;
@Output() public childEvent =new EventEmitter();
public value="This is form child using viewChild()";
constructor(private AppDataService: AppDataService) { }

  ngOnInit(): void {
    this.AppDataService.currentmessage$.subscribe(
      message => {
        if (message === 'Hi from Parent') {
          alert('Hi from Child!');
        } else if (message === 'Well Done child from Parent') {
          alert('Thank you from Child!');
        }
      }
    );
  }
  fireEvent(){
    this.childEvent.emit("This is form Child");
  }

}


