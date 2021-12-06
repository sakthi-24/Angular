import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private message=new Subject();
  currentmessage$ = this.message.asObservable();

  constructor() { }

  sendMessage(message:string){
    this.message.next(message);
  }
}
