import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  receiveRecipe(receivedRecipe) {
    console.log('hellooooo');
    debugger
    this.recipe = receiveRecipe;
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
