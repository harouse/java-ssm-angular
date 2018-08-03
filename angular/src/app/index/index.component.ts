import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
    let list = this.data.get<string>('http://localhost:8080/angular/user/showUser.do', {
      id: 1,
    });

    console.dir(list);

    list.subscribe(res => {
      console.dir(res);
    });
  }

}
