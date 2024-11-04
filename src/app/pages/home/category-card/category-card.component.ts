import { Component, Input } from '@angular/core';
import { ITransactionCategory } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  @Input() category!: ITransactionCategory

  constructor(private dataService: DataService) {}
  delete() {
    // this.dataService.delete()
  }
}
