import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {
  private apiKey: string = "6Y7STOUYFK3Z5JCA";

  public constructor(private http: HttpClient) {}

  public getPrice(symbol: string): number {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${this.apiKey}`
    let price = 0
    this.http.get<any>(url).subscribe(body => {
      console.log(body);
      price = body["Global Quote"]["05. price"]
      
    })
    return price
  }
}
