import { Injectable, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredients : Ingredient[]= [
    new Ingredient('Aplle', 5),
    new Ingredient('Condoms',10)
  ]

  @Output()ingredient = new EventEmitter<Ingredient>();
  
  constructor() { }

  getIngredeients(){
    return this.ingredients.slice();
  }

  emitOnIngredientAdd(nameElementRef : ElementRef, amountElementRef: ElementRef){
    const nameValue=nameElementRef.nativeElement.value;
    const amountValue=amountElementRef.nativeElement.value;
    const ingred = new Ingredient(nameValue, amountValue);
    this.ingredient.emit(ingred);
  }
}
