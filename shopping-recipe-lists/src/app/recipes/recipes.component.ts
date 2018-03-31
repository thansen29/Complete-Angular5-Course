import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe;

  constructor() {
  }

  ngOnInit() {
  }

}
