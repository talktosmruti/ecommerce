import { Component, OnInit, OnChanges } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[];
  constructor(private shopingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shopingService.getIngredeients()
    console.log('shopping list component ngOnint');
    this.shopingService.ingredientsChanged.subscribe(
      (data: Ingredient[]) => {
        this.ingredients= data;
      }
    );
    console.log('number of ingreds '+this.ingredients.length);
  }
}
