import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Data } from '../../Data'

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
@Output() onAddData: EventEmitter<Data> = new EventEmitter()

  userId!: number;
  title!: string;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.userId){
      alert('Please add UserID')
    }
    if(!this.title){
      alert('Please add title')
    }

    const newData = {
      userId: this.userId,
      title: this.title
    }

    this.onAddData.emit(newData)

    this.userId = 0;
    this.title = '';

  }

}
