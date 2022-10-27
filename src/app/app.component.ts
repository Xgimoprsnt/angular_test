import { Component } from '@angular/core';

interface TtaxData {
  filingType: string,
  month: string,
  year: string,
  saleAmount: number,
  taxAmount: number,
  surcharge: number,
  penalty: number,
  totalAmount: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-exam';
  stepSelected : number = 0 ;
  TypeOfFiling: string = '0';
  saleAmount: number = 0;
  taxAmount: number = 0;
  surchage: number = 0;
  penalty: number = 0
  totalAmount: number = 0;
  year : string = '';
  month : string = '';

  taxData: any = <TtaxData>{
    filingType:'',
    month:'',
    year:'',
    saleAmount:0,
    taxAmount:0,
    surcharge:0,
    penalty:0,
    totalAmount:0
  }

  closeResult = '';

  constructor() {}


  ngOnInit() {
 
  }

  updateAction(value : string){
    if(value == 'back'){
      this.stepSelected = 0
    }
    if(value == 'next'){
      this.stepSelected = 1
    }
    if(value == 'submit'){
      this.taxData ={
        filingType:this.TypeOfFiling,
        month : this.month,
        year:this.year,
        saleAmount:this.saleAmount,
        taxAmount:this.taxAmount,
        surcharge:this.surchage,
        penalty:this.penalty,
        totalAmount:this.totalAmount
      }
    }
  }

  calculateTaxAmount(value: number) {
    this.taxAmount = value * 0.07
  }

  calculateSurchageAmount(value: number) {
    this.surchage = value * 0.01
  }

  updateSaleAmout(value: number) {
    this.saleAmount = value;
    this.calculateTaxAmount(value)
    this.calculateSurchageAmount(value)
    this.penalty = 200;


    this.totalAmount = this.taxAmount + this.surchage + this.penalty;
  }

  updateTypeOfFiling(value: string) {

    this.TypeOfFiling = value;
    this.surchage = 0;
    this.saleAmount > 0 && this.updateSaleAmout(this.saleAmount)
  }

  updateYear(value : string){
    this.year = value 
  }

  updateMonth(value : string){
    this.month = value
  }



}




