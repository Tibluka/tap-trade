import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TradingHistory } from '../models/history';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  private accountMode: any = 'PRACTICE';
  private accountBalance: any = 0;
  public history: any = new TradingHistory();

  get mode() {
    return this.accountMode;
  }

  get balance() {
    return this.accountBalance;
  }

  get tradingHistory() {
    return this.history;
  }

  constructor(private http: HttpClient) { }

  async setAccountMode(mode: string) {
    const newMode: any =
      await this.http.post(`${environment.url}/changeAccount`,
        { username: 'lugomes441@hotmail.com', password: 'Lukkao@2020', mode }).toPromise()
    this.accountMode = newMode.mode;
    this.getAccountBalance();
  }

  async getAccountBalance() {
    const account: any =
      await this.http.post(`${environment.url}/balance`,
        { username: 'lugomes441@hotmail.com', password: 'Lukkao@2020' }).toPromise()
    this.accountBalance = account.balance;
  }

  async getHistory() {
    const history = await this.http.get(`${environment.url}/get-history`).toPromise();
    this.history = history;
  }

}
