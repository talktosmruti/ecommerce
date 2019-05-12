import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput')nameElementRef : ElementRef;
  @ViewChild('amountInput')amountElementRef : ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAdd(){
    this.shoppingService.emitOnIngredientAdd(this.nameElementRef, this.amountElementRef)
  }

  onDelete(){

  }

  onClear(){

  }

}
