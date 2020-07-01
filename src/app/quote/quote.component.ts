import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes ('Annett Mwangi','Jackson Smith', 'Give me coffee to change the things I can and wine to accept those that I cannot.', 0,0,new Date(1998,3,8)),
 
    new Quotes ('Lucy Wigwa','Biron Johnson' ,'They think they know the rules so that they can break it forgetting that we are the one who wrote it.', 0,0, new Date(1999,2,28)),
     new Quotes('Lilly Baraka','Rawlence Washington', 'Dont dress up so that they can see you,you might endup walking naked just to get their attention.', 0,0, new Date(2020,8,3)),
    new Quotes ( 'Lovine Akinyi','Zoe Rainbow', 'Dont dress for people appreciate you they might andup loving your looks rather than who you are so love yourself.',0,0, new Date(2012,9,4)),
     new Quotes('Rebecca Awino','Tom Hawland', 'You only know the importance of someone once they have left you and of something once you have lost it so choose wisely.',0,0, new Date(2017,8,1)),
     new Quotes('Verah Auma','Jerich Rosales', 'they say dont let people words change you  but I say it depends if its positive take it and if its negative leave it.',0,0, new Date(2020,6,4)),
     new Quotes('Nicole Wanjiku','Clark Kent', 'The best competition is compiting with yourself and others.',0,0, new Date(2020,9,8)),
   ];
  
  seeDetails(index) {
    this.quotes[index].viewDetails = !this.quotes[index].viewDetails;
  }
  purgeQuotes(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Qoute`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuotes(luc) {
    luc.elapse = new Date(luc.elapse)
    this.quotes.push(luc);
   
  }
  addVote(luc, index) {
    if (luc) {
      this.quotes[index].upvote+=1;
    }
  }
lessVote(luc,index){
  if(luc){
    this.quotes[index].downvote+=1
  }
}

initNum:number
finNum:number
counter:number

mostLiked(){
  this.initNum=0
  this.finNum=0
  for (this.counter=0; this.counter < this.quotes.length;this.counter++){
    this.finNum =this.quotes[this.counter].upvote;

    if(this.finNum > this.initNum){
      this.initNum = this.finNum
    }
  }
  return this.initNum

}
ngOnInit() {
}

}