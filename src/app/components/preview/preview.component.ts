import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() previewData? : any = {
    month : '',
    year:'',
    saleAmount:0,
    totalAmount:0,
    taxAmount:0,
    filingType:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
