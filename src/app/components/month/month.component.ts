import { Component, OnInit,Input } from '@angular/core';
import * as dayjs from 'dayjs'
dayjs().format()
@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  @Input() value?: String ;

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


}
