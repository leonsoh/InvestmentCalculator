import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../model/investment-input-model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: + this.enteredAnnualInvestment,
      duration: + this.enteredDuration,
      annualInvestment: + this.enteredAnnualInvestment,
      expectedReturn: + this.enteredExpectedReturn
    })
  }
}
