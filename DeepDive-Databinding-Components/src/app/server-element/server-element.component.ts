import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck,
   AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
   OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('heading') header: ElementRef
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngInit called');
    console.log('text content:' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
  }

  ngDoCheck() {
    console.log('doCheck called');
  }

  ngAfterContentInit() {
    console.log('after content init called');
  }

  ngAfterContentChecked() {
    console.log('after content checked called');
  }

  ngAfterViewInit() {
    console.log('after view init called');
    console.log('text content:' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('after view checked called');
  }

  ngOnDestroy() {
    console.log('on destroy called');
  }


}
