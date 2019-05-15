import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  @Output()seletedRecipe = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe('Glazed Ham recipe','Almost everything goes well with this creamy pie recipe. Prawn pie is super rich and is best for small portions as an appetizer at dinner parties.',
    'https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('mustard oil', 250),
        new Ingredient(' mayonese ', 3)
      ]
    )
    ,
    new Recipe('Poached Pear Salad','A sparkling salad with tender chicken breasts and cheese, tossed and mixed in salt, pepper and a generous dose of mayonnaise.',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2016/06/prawn-laksa-curry-bowl.jpg',
      [
        new Ingredient('Cinamon', 2),
        new Ingredient('mustard oil', 150),
        new Ingredient(' Noodles ', 3)
      ]
    ),
    new Recipe('Mutton Biryani Recipe','Mutton Biryani is yet another biryani recipe, which is a perfect fusion of taste and aroma. This indulgent recipe is a true example of Indian culinary heritage.',
    'https://i.ytimg.com/vi/HI2-u2zu8Ss/maxresdefault.jpg',
      [
        new Ingredient('yoghurt ', 1),
        new Ingredient('sliced onion',50),
        new Ingredient(' Mutton ', 1)
      ]
    ),
    new Recipe('Tandoori Chicken Recipe','A classic chicken starter recipe! This grilled chicken is a popular Punjabi snack that can be served with onion rings and a green chutney.',
    'https://truffle-assets.imgix.net/1b803a78-410-tandoorichicken-dishsquare2.jpg',
      [
        new Ingredient('Large chicken pieces', 8),
        new Ingredient('red chilli paste',50),
        new Ingredient(' tandoori masala', 1)
      ]
    )

  ];

  constructor(private shopService: ShoppingService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipesById(id: string){
    return this.recipes.slice()[id];
  }

  sendIngredientsToShoppingList(ingreds : Ingredient[]){
    this.shopService.recieveIngredsFromRecipe(ingreds);
  }
}
