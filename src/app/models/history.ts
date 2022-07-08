export class TradingHistory {
    history: Array<TradingHistoryObj> = [new TradingHistoryObj()]
  }

  class TradingHistoryObj {
    active: string = '';
    active_id: number = 0;
    amount: number = 0;
    client_platform_id: number = 0;
    count: number = 0;
    created: number = 0;
    created_millisecond: number = 0;
    exp_value: number = 0;
    expired: number = 0;
    id: Array<number> = [];
    option_type: string = '';
    win: string = '';
    win_amount: number = 0
  }
  