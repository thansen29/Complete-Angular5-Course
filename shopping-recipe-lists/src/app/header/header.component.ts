import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() selection = new EventEmitter<string>();
  selected = "Recipes";

  makeSelection(event) {
    this.selected = event.target.textContent === "Recipes" ? "Recipes" : "Shopping";
    this.selection.emit(this.selected)
  }
}
