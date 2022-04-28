import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @ViewChild('myLinks', { static: false }) myLinks!: ElementRef;

  myFunction() {
    let x = this.myLinks.nativeElement.style.display;
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
