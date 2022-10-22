import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
  @Input() value?: number ;
  constructor() { }

  ngOnInit(): void {
  }

}
