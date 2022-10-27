import { Component, OnInit ,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() step: number = 0 || 1

  constructor() { }

  ngOnInit(): void {
  }


  checkStepStyle(step: number): Object {
    let style = {
      'backgroundColor': 'black',
      'color': 'white'
    }
    if (step == 1) {
      return style
    }
    return {}
  }

}
