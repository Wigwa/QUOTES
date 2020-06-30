import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes.detail',
  templateUrl: './quotes.detail.component.html',
  styleUrls: ['./quotes.detail.component.css'],
})
export class QuotesDetailComponent implements OnInit {

  @Input() quote:Quotes;

  upvote(){
    this.quote.likes;
  }
  downvote(){
    this.quote.dislikes;
  }

  quotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
