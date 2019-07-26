import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public Technology = "Fisrt Componenet"
  constructor() { }

  ngOnInit() {
  }

  fun()
  {
    return "Learn "+ this.Technology;
  }

}
