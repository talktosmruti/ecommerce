import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedItem : Recipe ;
  constructor() { }

  ngOnInit() {
    
  }

  captureSelectedItem(recipe:Recipe){
    console.log("inside recipes recived :"+recipe.name);
    this.selectedItem =recipe;
  }

}
