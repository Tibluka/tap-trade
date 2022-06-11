import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountMode: string = 'PRACTICE';

  get mode() {
    return this.accountMode;
  }

  constructor() { }

  setAccountMode(mode: string) {
    this.accountMode = mode;
  }

}
