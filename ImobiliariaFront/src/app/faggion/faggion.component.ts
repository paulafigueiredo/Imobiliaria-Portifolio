import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faggion',
  templateUrl: './faggion.component.html',
  styleUrls: ['./faggion.component.css']
})
export class FaggionComponent implements OnInit {

  constructor() { }

  
  ngOnInit(){
    window.scroll(0,0);
  }


}
