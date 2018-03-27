import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() countAdded = new EventEmitter<number>();
  @ViewChild('interval') interval: ElementRef;
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.countAdded.emit(this.count += 1);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

}
