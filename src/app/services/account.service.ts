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
    const balance = await this.http.post(`${environment.url}/balance`, {username: 'lugomes441@hotmail.com', password: 'Lukkao@2020'}).toPromise()
    this.accountBalance = balance;
  }

}
