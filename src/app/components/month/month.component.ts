import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  @Input() value?: String ;

  constructor() { }

  ngOnInit(): void {
  }

}
