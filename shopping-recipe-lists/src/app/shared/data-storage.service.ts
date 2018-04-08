import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipesService: RecipesService) {}

  storeRecipes() {
    // const token = this.authService.getToken();
    // return this.httpClient.put(`https://ng-recipe-book-4002f.firebaseio.com/recipes.json`, this.recipesService.getRecipes(), {
    //   params: new HttpParams().set('auth', token)
    // });
    const req = new HttpRequest('PUT', `https://ng-recipe-book-4002f.firebaseio.com/recipes.json`, this.recipesService.getRecipes(), {
      reportProgress: true
    });
    return this.httpClient.request(req);
  }

  getRecipes() {
    // const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>(`https://ng-recipe-book-4002f.firebaseio.com/recipes.json`)
  //   this.httpClient.get(`https://ng-recipe-book-4002f.firebaseio.com/recipes.json?auth=${token}`, {
  //     observe: 'response',
  //     responseType: 'text'
  // })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipesService.setRecipes(recipes);
        }
      );
  }
}
