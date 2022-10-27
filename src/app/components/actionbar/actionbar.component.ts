import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ActionbarComponent implements OnInit {
  @Input() step: number = 0 || 1
  @Output() action = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleAction(action : string){
    this.action.emit(action)
  }

}
