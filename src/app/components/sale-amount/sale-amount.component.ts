import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {
  @Input() ItemValue?: number ;
  @Output() changeValue = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  updateValue(value : any){

    this.changeValue.emit(value)
  }

}
