import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quotes[] = [
    {id:1, title:'Live',  name:'Give me coffee to change the things I can and wine to accept those that I cannot.'},

    {id:2, title:'Fact', name:'They think they know the rules so that they can break it forgetting that we are the one who wrote it.'},
    {id:3, title:'Wise choice', name:'Dont dress up so that they can see you,you might endup walking naked just to get their attention.'},
    {id:4, title:'Life', name:'Dont dress for people appreciate you they might andup loving your looks rather than who you are so love yourself.'},
    {id:5, title:'Reality', name:'You only know the importance of someone once they have left you and of something once you have lost it so choose wisely.'},
    {id:6, title:'Fact', name:'they say dont let people words change you  but I say it depends if its positive take it and if its negative leave it.'},
    {id:7, title:'Fact', name:'THe best competition is compiting with yourself and others.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
