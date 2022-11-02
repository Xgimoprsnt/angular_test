import { Component, OnInit,Input, Output ,EventEmitter, forwardRef } from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilingTypeComponent),
      multi: true
    }
  ]
})
export class FilingTypeComponent implements ControlValueAccessor  {
  valueSelected? : String
  isDisabled: boolean = false;
  // @Input() valueSelected?: String ;
  // @Output() changeValue = new EventEmitter<string>();

  constructor() { }

  writeValue(input : string): void {  
    this.valueSelected = input
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
   this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
  
  onTouch(){

  }

  onChange(value : string){
    console.log(value,'value')
    // this.changeValue.emit(value)
  }

}
