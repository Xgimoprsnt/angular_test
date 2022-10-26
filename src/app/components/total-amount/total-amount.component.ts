import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {
  @Input() ItemValue?: number ;
  constructor() { }

  ngOnInit(): void {
  }

}
