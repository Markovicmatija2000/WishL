import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wi';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  isVisible=true;
  items : WishItem[]=[
    new WishItem('First'),
    new WishItem('Second', true),

    new WishItem('Goggins'),
    new WishItem('Mark')


  ]
  title = 'WishList';

toggleItem(item:WishItem){
  
  item.isComplited = !item.isComplited;

  console.log(item);
}
newWishT = '';
newWish()
{
  this.items.push(new WishItem(this.newWishT));
  this.newWishT ='';
}

}
