import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wi';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishComponent } from "./add-wish/add-wish.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishComponent, WishFilterComponent],
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
  listFilter : String = '';
  filter: (item: WishItem) => boolean = () => true;

 







}
