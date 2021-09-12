import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../../Data'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent implements OnInit {
  @Input()
  data!: Data;
  @Output() onDeleteData: EventEmitter<Data> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(data: any){
    console.log(this.onDeleteData.emit(data))
  }

}
