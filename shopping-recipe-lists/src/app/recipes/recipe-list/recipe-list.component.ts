import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  constructor(private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
  }

}
