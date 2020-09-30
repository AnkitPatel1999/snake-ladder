import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'snake-ladder';

  tile:number[] = new Array(100);
  color;
  i=1;
  constructor() {
    for (let index = 0; index < this.tile.length; index++) {
      this.tile[index] = this.i++;
    }
    this.tile.reverse();
    

  }

  ngOnInit() {

  }


}
