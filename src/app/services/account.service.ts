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
  public history: TradingHistory = new TradingHistory();

  get mode() {
    return this.accountMode;
  }

  get balance() {
    return this.accountBalance;
  }

  constructor(private http: HttpClient) { }

  async setAccountMode(mode: string) {
    const newMode: any =
      await this.http.post(`${environment.url}/changeAccount`,
        { username: 'lugomes441@hotmail.com', password: 'Lukkao@2020', mode }).toPromise()
    this.accountMode = newMode.mode;
    this.setAccountBalance();
  }

  async setAccountBalance() {
    const account: any =
      await this.http.post(`${environment.url}/balance`,
        { username: 'lugomes441@hotmail.com', password: 'Lukkao@2020' }).toPromise()
    this.accountBalance = account.balance;
  }

  getHistory() {
    return this.http.get(`${environment.url}/get-history`)
  }

}
