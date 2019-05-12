import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput')nameElementRef : ElementRef;
  @ViewChild('amountInput')amountElementRef : ElementRef;
  @Output()ingredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    const nameValue=this.nameElementRef.nativeElement.value;
    const amountValue=this.amountElementRef.nativeElement.value;
    const ingred = new Ingredient(nameValue, amountValue);
    this.ingredient.emit(ingred);
  }

  onDelete(){

  }

  onClear(){

  }

}
