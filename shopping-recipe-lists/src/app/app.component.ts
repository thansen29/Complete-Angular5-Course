import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selected = "Recipes";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDd9dZQpoEIg0Xr1hfh57zK7UtdmF-3FwQ",
      authDomain: "ng-recipe-book-4002f.firebaseapp.com",
    });
  }

  updateSelected(selection) {
    console.log(selection);
    this.selected = selection;
  }
}
