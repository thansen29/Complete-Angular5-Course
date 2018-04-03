import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipesService: RecipesService) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    return this.http.put('https://ng-recipe-book-4002f.firebaseio.com/recipes.json', recipes);
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-4002f.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (response: Response) => {
          this.recipesService.setRecipes(recipes);
        }
      )
  }
}
