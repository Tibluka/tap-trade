import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountMode: string = 'PRACTICE';
  private accountBalance: any;

  get mode() {
    return this.accountMode;
  }

  get balance() {
    return this.accountBalance;
  }

  constructor(private http: HttpClient) { }

  setAccountMode(mode: string) {
    this.accountMode = mode;
  }

  async setAccountBalance() {
    const balance = await this.http.get(`${environment.url}/balance`).toPromise()
    this.accountBalance = balance;
  }

}
