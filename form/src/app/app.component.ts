import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  onSubmit(contactForm: { value: any; }) {
    console.log(contactForm.value);
  }
}

export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

