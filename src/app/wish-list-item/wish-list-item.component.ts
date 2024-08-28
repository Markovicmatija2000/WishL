import { Component,Input,Output,EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wi';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input()wishText! : string;

  @Input() fullfilled! : boolean;

  @Output() fullfilledChange = new EventEmitter<boolean>();


  get cssClasse(){
    return this.fullfilled ? ['stikeout', 'text-muted'] : [];
    //return {'strikeout  text-muted' : this.fullfilled;};
  }

  toggleFullfilled(){
  
    this.fullfilled = !this.fullfilled
    this.fullfilledChange.emit(this.fullfilled);
  }

}
