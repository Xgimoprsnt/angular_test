import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';

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
    console.log(this.ItemValue,'value')
  }

  ngOnChanges(){
    console.log(this.ItemValue,'ngOnChanges')
  }

  updateValue(value : any){
    console.log(value,'update amount')
    
    this.changeValue.emit(Number(value))
  }

}
