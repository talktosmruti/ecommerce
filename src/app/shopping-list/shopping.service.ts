import { Injectable, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients : Ingredient[]= [
    new Ingredient('Aplle', 5),
    new Ingredient('Condoms',10)
  ]

  @Output()ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() {
   }

  getIngredeients(){
    return this.ingredients.slice();
  }

  emitOnIngredientAdd(nameElementRef : ElementRef, amountElementRef: ElementRef){
    const nameValue=nameElementRef.nativeElement.value;
    const amountValue=amountElementRef.nativeElement.value;
    const ingred = new Ingredient(nameValue, amountValue);
    this.ingredients.push(ingred);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  recieveIngredsFromRecipe(ingreds: Ingredient[]){
    //This makes ingreds an array an pushes each element
    for(let i of ingreds){
      this.ingredients.push(i);
      console.log('at shopping service name '+i.name);
    }
    console.log('inside recieveIngredsFromRecipe ...getIngredeients response'+this.getIngredeients().length);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
