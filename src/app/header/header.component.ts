import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()feature= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSlected(selector:string){
    console.log('on click data :'+selector);
    this.feature.emit(selector);
  }

}
