import { Component, OnDestroy, OnInit ,Input, SimpleChanges, ContentChild, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit {

  

  @Input() name = '';

  @ContentChild('parentContent', ) parentContent: any;
  
  constructor() {
    console.log("child constructor called.");
   }

    

  ngOnInit(): void {
    console.log("child Init called.");
  
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("Child OnChanges called.");
  }
  ngDoCheck() {
    console.log('Child DoCheck');
    
  }
  ngAfterContentInit() {
    console.log('Child After Content Init');
    
  }
  ngAfterContentChecked() {
    console.log('Child After Content checked');
    
  }

  ngAfterViewInit() {
    console.log('Child After View Init');
  
  }

  ngOnDestroy() {
      
    console.log('Child OnDestroy - component is destroyed');
  }
}
