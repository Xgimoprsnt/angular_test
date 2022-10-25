import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-exam';
  page : string = 'Input Detail' || 'Reviews & Confirm' ;



  async handleOnclickNext(){

    this.page = 'Reviews & Confirm'
  }

  async handleOnclickBack(){

    this.page = 'Input Detail'
  }

  checkStepStyle(page : string): Object {
    let style ={
      'backgroundColor': 'black',
      'color': 'white'
    }

    if (page == 'Reviews & Confirm'){
        return style
    }
    return {}
  }


}




