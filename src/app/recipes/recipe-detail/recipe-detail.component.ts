import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownOpenerDirective } from 'src/app/shared/dropdown-opener.directive';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedItem: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    let selectedRecipeId : string;
    this.route.params.subscribe(
      (params : Params) =>{
        selectedRecipeId = params['id'];
      }
    );
    this.selectedItem  = this.recipeService.getRecipesById(selectedRecipeId);
  }

  sendToShoppingList(){
    this.recipeService.sendIngredientsToShoppingList(this.selectedItem.ingredients);
  }
}
