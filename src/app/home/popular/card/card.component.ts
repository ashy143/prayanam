import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: Card;

  private dateString: string;

  ngOnInit() {
    const date = new Date();
    this.dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
}
