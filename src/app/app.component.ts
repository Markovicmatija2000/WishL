import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wi';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishComponent } from "./add-wish/add-wish.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";
import {EventService} from "../shared/services/EventService";
import { HttpClient} from '@angular/common/http';
import { WishService } from './wish.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit {
  isVisible=true;
  items : WishItem[]=[];
  
    /*
    =[
    new WishItem('First'),
    new WishItem('Second', true),

    
    new WishItem('Goggins'),
    new WishItem('Mark')
*/

  //]
  constructor(@Inject(EventService) events : EventService, private wishService : WishService)
  {events.listen('removeWish',(wish:any)=>{
    console.log(wish.wishText);
    let index = this.items.indexOf(wish);
    this.items.splice(index,1);
   
  })}

  title = 'WishList';
  listFilter : String = '';
  filter: (item: WishItem) => boolean = () => true;

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any)=>{
      //this.items = data;
      this.items = data;
    },
  (error :any)=>{
    alert(error.message);
  })
  }

 
  //data.map((item: any) => new WishItem(item.wishText, item.isComplited));







}
