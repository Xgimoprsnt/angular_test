import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {
  @Input() ItemValue?: number ;
  constructor() { }

  ngOnInit(): void {
  }

}
