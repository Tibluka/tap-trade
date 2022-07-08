import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  private engineStatus: boolean = false;

  get status() {
    return this.engineStatus;
  }

  constructor(private http: HttpClient) { }

  async setEngineStatus(status: boolean) {
    if (!status) {
      await this.http.post(`${environment.url}/stop`,
        { username: 'lugomes441@hotmail.com', password: 'Lukkao@2020' }).toPromise()
      this.engineStatus = status;
    } else {
      const engine: any =
        await this.http.post(`${environment.url}/start`,
          { username: 'lugomes441@hotmail.com', password: 'Lukkao@2020' }).toPromise()
      this.engineStatus = engine.status;
    }
  }

  async getEngineStatus() {
    const engine: any = await this.http.post(`${environment.url}/get-status`,
      { username: 'lugomes441@hotmail.com', password: 'Lukkao@2020' }).toPromise();
    this.engineStatus = engine.status;
    console.log(engine);
    
  }

}
