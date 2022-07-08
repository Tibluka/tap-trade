import { Component, OnInit } from '@angular/core';
import { TradingHistory } from 'src/app/models/history';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  get tradingHistory() {
    return this.accountService.tradingHistory;
  }

  constructor(private accountService: AccountService) {
    this.accountService.getHistory();
  }

  ngOnInit(): void { }

  date(created_millisecond: number) {
    return new Date(created_millisecond)
  }

}
