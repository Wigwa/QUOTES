import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes.detail',
  templateUrl: './quotes.detail.component.html',
  styleUrls: ['./quotes.detail.component.css'],
})
export class QuotesDetailComponent implements OnInit {
  @Input() quote:Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  @Output () voteIncreese = new EventEmitter<boolean>();
  @Output () voteDecrease = new EventEmitter<boolean>();

  fnDecrease(two:boolean){
    this.voteDecrease.emit(two);
  }

  fnIncrease(one:boolean){
    this.voteIncreese.emit(one);
  }
  quoteDan(purge: boolean) {
    this.isComplete.emit(purge);
  }

  constructor() { }

  ngOnInit() {
  }

}
