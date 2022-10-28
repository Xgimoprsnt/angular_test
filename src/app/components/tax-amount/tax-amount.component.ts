import { Component, OnInit,Input ,Output,EventEmitter,OnChanges} from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {
  @Input() ItemValue?: number ;
  @Output() changeValue = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.ItemValue && this.ItemValue > 20){
    this.ItemValue = 20
    }
  }

  checktax(event:HTMLInputElement){
   const value = Number(event.value)
   if(value > 20 ){
    this.changeValue.emit(20)
   }else{
    this.changeValue.emit(Number(value))
   }
  }

}
