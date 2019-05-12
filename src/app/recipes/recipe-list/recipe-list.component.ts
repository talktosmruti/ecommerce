import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output()item = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {

    this.recipes.push(new Recipe('Glazed Ham recipe','Almost everything goes well with this creamy pie recipe. Prawn pie is super rich and is best for small portions as an appetizer at dinner parties.',
    'https://media2.s-nbcnews.com/j/newscms/2018_35/1363730/rachel-hollis-chicken-fingers-today-main-180828_b9b2a726ec8654e3f9f7435ce26588fb.today-inline-large.jpg'));
    this.recipes.push(new Recipe('Poached Pear Salad','A sparkling salad with tender chicken breasts and cheese, tossed and mixed in salt, pepper and a generous dose of mayonnaise.',
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2016/06/prawn-laksa-curry-bowl.jpg'));
  }

  emitSelectedItem(recipe:Recipe){
    console.log('inside list ts recipe name '+recipe.name);
    this.item.emit(recipe);
  }

}
