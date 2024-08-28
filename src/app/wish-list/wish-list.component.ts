import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wi';
import { WishListItemComponent } from "../wish-list-item/wish-list-item.component";

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, FormsModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

 @Input() wishes : WishItem[]=[];


 

}
