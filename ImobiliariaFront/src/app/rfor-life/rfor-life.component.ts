import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rfor-life',
  templateUrl: './rfor-life.component.html',
  styleUrls: ['./rfor-life.component.css']
})
export class RForLifeComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    window.scroll(0,0);
  }

}
