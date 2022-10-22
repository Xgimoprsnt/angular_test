import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  @Input() value?: String ;

  constructor() { }

  ngOnInit(): void {
  }

}
