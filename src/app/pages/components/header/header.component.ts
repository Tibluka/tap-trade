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
    this.account.setAccountBalance();
    this.engine.getEngineStatus();
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (!this.engineStatus) { return }
      const date = new Date().getSeconds();
      date === 0 || date === 5 ? this.account.setAccountBalance() : null;
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

}
