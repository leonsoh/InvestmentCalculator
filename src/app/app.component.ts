import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { Services } from './services/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private service: Services, private router: Router) {}
  
  resultsData?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];

  onCalculateInvestmentResults(data: {
    initialInvestment: number;
    duration: number;
    annualInvestment: number;
    expectedReturn: number;
  }) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData ?? [{}];
    this.service.getUserPosts().subscribe(data => {
      console.log(data);
    })
  }

  toggleNavigation() {
    if (this.router.url === '/') {
      this.router.navigate(['app-settings']);
    } else {
      this.router.navigate(['/']); 
    }
  }
}
