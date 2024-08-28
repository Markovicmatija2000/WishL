import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wi';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-wish',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-wish.component.html',
  styleUrl: './add-wish.component.css'
})
export class AddWishComponent {

@Output() addWish = new EventEmitter<WishItem>();

  newWishT = '';
newWish()
{
  //this.items.push(new WishItem(this.newWishT));
 
  this.addWish.emit(new WishItem(this.newWishT));
  this.newWishT ='';
}

}
