import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import * as dayjs from 'dayjs'
dayjs().format()


@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Input() ItemValue?: String ;
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

  updateValue(value : string){
    this.changeValue.emit(value)
  }


}
