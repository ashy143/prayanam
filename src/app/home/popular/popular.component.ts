import { Component, OnInit } from '@angular/core';
import { destinations } from './destinations';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  private cards = destinations;
  
  constructor() { }

  ngOnInit() {
  }

}
