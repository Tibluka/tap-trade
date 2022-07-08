import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EngineService } from 'src/app/services/engine.service';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public interval: any;

  get accountMode() {
    return this.account.mode;
  }

  get accountBalance() {
    return this.account.balance;
  }

  get engineStatus() {
    return this.engine.status;
  }

  constructor(private account: AccountService, private engine: EngineService) {
    this.account.getAccountBalance();
    this.engine.getEngineStatus();
  }

  ngOnInit(): void {
    this.interval = setInterval(async () => {
      if (this.engineStatus) { return }
      const date = new Date().getSeconds();
      if (date === 0 || date === 30) {
        this.animateValue(this.accountBalance)
        await this.account.getAccountBalance();
        this.account.getHistory();
      }
    }, 1000)
  }

  setAccountMode() {
    this.accountMode === 'PRACTICE' ?
      this.account.setAccountMode('REAL') :
      this.account.setAccountMode('PRACTICE')
  }

  setEngineStatus() {
    !this.engineStatus ?
      this.engine.setEngineStatus(true) :
      this.engine.setEngineStatus(false)
  }

  animateValue(newAmount: number) {
    function animateValue(obj: any, start: any, end: any, duration: any) {
      let startTimestamp: any = null;
      const step = (timestamp: any) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
        let value = Math.fround(progress * (end - start) + start)
        obj.innerHTML = currencyPipe.transform(value, 'BRL', true)
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    let obj = document.getElementById("value");
    animateValue(obj, this.accountBalance, newAmount, 2000);
  }


  transform(value: number, currencyCode: string = 'BRL', symbolDisplay: boolean = true, digits?: string): string {
    if (!value) {
      return '';
    }
    let currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
    let newValue: any = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);
    return newValue;
  }

}
