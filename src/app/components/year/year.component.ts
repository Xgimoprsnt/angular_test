import { Component, OnInit,Input,Output,EventEmitter, forwardRef   } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dayjs from 'dayjs'
dayjs().format()


@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YearComponent),
      multi: true
    }
  ]
})
export class YearComponent implements ControlValueAccessor {
  @Input() valueSelected?: String ;
  isDisabled: boolean = false;
  @Output() changeValue = new EventEmitter<string>();
  
  yearList : any =[]
  constructor() { }

  async ngOnInit() {
    this.yearList =  await this.getYear()
    console.log(this.yearList,'year')
  }

  async getYear(){
    const currentYear = dayjs().year()
    const list = []
      for (let index = 2020; index <= currentYear; index++) {
        list.push(index)
        
      }
      return list
  }

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
