import { Component, OnInit,Input,Output,EventEmitter, forwardRef   } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dayjs from 'dayjs'
dayjs().format()
@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonthComponent),
      multi: true
    }
  ]
})
export class MonthComponent implements ControlValueAccessor {
  valueSelected?: any ;
  isDisabled: boolean = false;
  @Output() changeValue = new EventEmitter<string>();

  monthList : any =[]
  constructor() { }

  async ngOnInit() {

    this.monthList =  await this.getMonth()
  }

  async getMonth(){
    const currentMonth = dayjs().month()
    const list = []
      for (let index = 0; index <= currentMonth; index++) {
        list.push(dayjs().month(index).format('MMMM'))
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







