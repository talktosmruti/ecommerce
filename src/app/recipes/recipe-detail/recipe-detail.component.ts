import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownOpenerDirective } from 'src/app/shared/dropdown-opener.directive';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()selectedItem: Recipe;
  constructor() { 

  }

  ngOnInit() {
  }

}
