import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MarketDataService } from 'src/app/services/market-data.service';
import { IMarketSymbol } from 'src/app/models/market-symbol';


@Component({
  selector: 'app-market-symbols-list',
  templateUrl: './market-symbols-list.component.html',
  styleUrls: ['./market-symbols-list.component.scss']
})
export class MarketSymbolsListComponent implements OnInit {

  public constructor (private marketDataService: MarketDataService, private dataService: DataService) {}

  public ngOnInit() {
    this.dataService.getAll("market_symbols").subscribe(body => {
      body.forEach((symbol: IMarketSymbol) => {
        console.log(symbol.symbol + " " + this.marketDataService.getPrice(symbol.symbol));
      });
    })
    
  }
}
