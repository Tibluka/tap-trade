import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  private engineStatus: boolean = false;

  get status() {
    return this.engineStatus;
  }

  constructor() { }

  setEngineStatus(status: boolean) {
    this.engineStatus = status;
  }
}
