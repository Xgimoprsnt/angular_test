import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {
  @Input() value?: number ;
  constructor() { }

  ngOnInit(): void {
  }

}
