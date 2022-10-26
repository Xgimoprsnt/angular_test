import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
  @Input() ItemValue?: number ;
  constructor() { }

  ngOnInit(): void {
  }

}
