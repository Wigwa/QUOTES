import { Component } from '@angular/core';
import { Quotes } from './quotes' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
    new Quotes (1, 'Live', 'Give me coffee to change the things I can and wine to accept those that I cannot.'),
 
    new Quotes (2, 'Fact', 'They think they know the rules so that they can break it forgetting that we are the one who wrote it.'),
     new Quotes(3, 'Wise choice', 'Dont dress up so that they can see you,you might endup walking naked just to get their attention.'),
    new Quotes (4, 'Life', 'Dont dress for people appreciate you they might andup loving your looks rather than who you are so love yourself.'),
     new Quotes(5,'Reality', 'You only know the importance of someone once they have left you and of something once you have lost it so choose wisely.'),
     new Quotes(6, 'Fact', 'they say dont let people words change you  but I say it depends if its positive take it and if its negative leave it.'),
     new Quotes(7, 'Fact', 'THe best competition is compiting with yourself and others.'),
   ]
  }