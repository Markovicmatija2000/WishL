import { Component,Output,Input,EventEmitter,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wi';


const filters:  ((item: WishItem) => boolean)[]= [
(item :WishItem)=> true,
(item :WishItem)=> !item.isComplited,
(item :WishItem)=> item.isComplited
];
@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {
  @Input() filter: (item: WishItem) => boolean = filters[0];
  @Output() filterChange = new EventEmitter<any>();
  ngOnInit() :void {
    
    this.updateFilter("0");
  }

  listFilter :any = "0";
  

  updateFilter(value : any)
  {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);

  }

}
