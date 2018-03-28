import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = "Recipes";

  updateSelected(selection) {
    console.log(selection);
    this.selected = selection;
  }
}
