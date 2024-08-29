import { Component,Input,Output,EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wi';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {EventService} from "./../../shared/services/EventService"

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input()wish! : WishItem; // wishText

 // @Input() fullfilled! : boolean;

  //@Output() fullfilledChange = new EventEmitter<boolean>();


  get cssClasse(){
    //return this.fullfilled ? ['stikeout ', 'text-muted'] : [];
    //return {'strikeout  text-muted' : this.fullfilled;};
    return this.wish.isComplited ? ['strikeout', 'text-muted'] : [];
  }
  constructor(private events : EventService){}

  removeWish()
  {
    this.events.emit('removeWish',this.wish);
  }

  toggleFullfilled(){

    this.wish.isComplited = !this.wish.isComplited
  
   // this.fullfilled = !this.fullfilled
    //this.fullfilledChange.emit(this.fullfilled);
  }

}
