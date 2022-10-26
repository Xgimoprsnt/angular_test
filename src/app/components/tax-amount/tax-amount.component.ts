import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {
  @Input() ItemValue?: number ;
  constructor() { }

  ngOnInit(): void {
  }

}
