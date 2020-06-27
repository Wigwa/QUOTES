import { Component } from '@angular/core';
import { Quotes } from './quotes' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
    {id:1, name:'Give me to change the things I can and wine to accept those that I cannot.'},
    {id:2, name: 'They think they know the rules so that they can breakit forgetting that we are the ones who wrote it.'}
  ];
}
