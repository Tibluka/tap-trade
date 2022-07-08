import { Component, OnInit } from '@angular/core';
import { TradingHistory } from 'src/app/models/history';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  tradingHistory: TradingHistory = new TradingHistory();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.history()
  }

  history() {
    this.accountService.getHistory().subscribe((tradingHistory: any) => {
      this.tradingHistory = tradingHistory
    })
  }

  date(created_millisecond: number) {
    return new Date(created_millisecond)
  }

}
