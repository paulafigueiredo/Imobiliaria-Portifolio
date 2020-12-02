import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-da-vinci',
  templateUrl: './da-vinci.component.html',
  styleUrls: ['./da-vinci.component.css']
})
export class DaVinciComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    window.scroll(0,0);
  }
}
