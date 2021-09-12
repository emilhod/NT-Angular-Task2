import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Data} from '../../Data';


@Component({
  selector: 'app-datacomp',
  templateUrl: './datacomp.component.html',
  styleUrls: ['./datacomp.component.css']
})
export class DatacompComponent implements OnInit {
  datas: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((datas) => this.datas = datas);
  }

  deleteData(data: Data) {
    this.dataService.deleteData(data).subscribe(() => (this.datas = this.datas.filter ((d) => d.id !== data.id)));
  }

  addData(data: Data){
    this.dataService.addData(data).subscribe((data) => (this.datas.push(data)))

  }

}
