import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wi';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

 @Input() wishes : WishItem[]=[];


  toggleItem(item:WishItem){
  
    item.isComplited = !item.isComplited;
  
    console.log(item);
  }

}
