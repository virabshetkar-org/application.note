import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.page.html',
  styleUrl: './note.page.css',
})
export class NotePage implements OnInit {
  constructor() {
    console.log("HERE!");
  }
  
  ngOnInit() {
    console.log("HERE!");
  }
}
``