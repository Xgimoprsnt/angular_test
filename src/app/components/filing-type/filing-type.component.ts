import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  @Input() valueSelected?: String ;
  @Output() changeValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  Change(value : string){
    this.changeValue.emit(value)
  }

}
