import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  @Output()seletedRecipe = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe('Glazed Ham recipe','Almost everything goes well with this creamy pie recipe. Prawn pie is super rich and is best for small portions as an appetizer at dinner parties.',
    'https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg')
    ,
    new Recipe('Poached Pear Salad','A sparkling salad with tender chicken breasts and cheese, tossed and mixed in salt, pepper and a generous dose of mayonnaise.',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2016/06/prawn-laksa-curry-bowl.jpg')

  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
