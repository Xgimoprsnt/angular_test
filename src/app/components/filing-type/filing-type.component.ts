import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

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

export class FilingTypeComponent implements ControlValueAccessor {
  valueSelected?: any
  isDisabled: boolean = false;
  @Output() changeValue = new EventEmitter<string>();

  constructor() { }

  onTouch() {
    console.log('onTouch')
  }

  onChange(value: string) {
    this.changeValue.emit(value)
    console.log(value, 'value onChange')
  }

  writeValue(input: string): void {
    console.log('writeValue')
    // this.valueSelected = input
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange')
    // this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched')
    // this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState')
    this.isDisabled = isDisabled
  }

}
