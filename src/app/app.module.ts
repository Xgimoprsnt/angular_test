import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilingTypeComponent } from './components/filing-type/filing-type.component';
import { MonthComponent } from './components/month/month.component';
import { YearComponent } from './components/year/year.component';
import { SaleAmountComponent } from './components/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './components/tax-amount/tax-amount.component';
import { SurchargeComponent } from './components/surcharge/surcharge.component';
import { PenaltyComponent } from './components/penalty/penalty.component';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { StepComponent } from './components/step/step.component';
import { ActionbarComponent } from './components/actionbar/actionbar.component';
import { PreviewComponent } from './components/preview/preview.component';
import { OnlynumberDirective } from './directive/onlynumber.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './components/modal/modal.component';




@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    HeaderComponent,
    StepComponent,
    ActionbarComponent,
    PreviewComponent,
    OnlynumberDirective,
    NgbdModalContent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }

