import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent} from './components/modal/modal.component'

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

  taxDataForm = new FormGroup({
    filingType:new FormControl(''),
    month:new FormControl(''),
    year:new FormControl(''),
    saleAmount:new FormControl(''),
    taxAmount:new FormControl(''),
    surcharge:new FormControl(''),
    penalty:new FormControl(''),
    totalAmount:new FormControl(''),
  })

  constructor(
    public modalService: NgbModal
  ) {}

  ngOnInit() {
 
  }

  updateAction(value : string){
    console.log(this.taxDataForm)
    if(value == 'back'){
      this.stepSelected = 0
    }
    if(value == 'next'){
      this.stepSelected = 1
      this.taxData ={
        filingType:this.TypeOfFiling == '0'? 'Ordinary Filing':'Additional Filing',
        month : this.month,
        year:this.year,
        saleAmount:this.saleAmount,
        taxAmount:this.taxAmount,
        surcharge:this.surchage,
        penalty:this.penalty,
        totalAmount:this.totalAmount
      }
    }
    if(value == 'submit'){
      this.openModal()
    }
  }

  calculateTaxAmount(value: number) {
    return value * 0.07
  }

  calculateSurchageAmount(value: number) {
    return value * 0.01
  }

  updateSaleAmout(value: number) {
    console.log(value)
    this.saleAmount = value;
    this.taxAmount = this.calculateTaxAmount(value)
    this.surchage = this.calculateSurchageAmount(this.taxAmount)
    this.penalty = 200;


    this.totalAmount = this.taxAmount + this.surchage + this.penalty;
    console.log(this.taxAmount,'this.taxAmount')
  }

  updateTaxAmount(value:number){
    this.taxAmount = value
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

	openModal() {
		const modalRef = this.modalService.open(NgbdModalContent);
		modalRef.componentInstance.allData = this.taxData;
	}


  

}




