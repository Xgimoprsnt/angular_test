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
   console.log('ngonChanges')
  }

 

}
