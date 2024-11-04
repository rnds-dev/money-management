import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: Date = new Date()

  public dateToString(date: Date) : string {
    return date.toISOString().split('T')[0]
  }

  public getStartMonth() : Date {
    return new Date(this.date.getFullYear(), this.date.getMonth(), 2)
  }

  public getEndMonth() : Date {
    return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1)
  }

  public getStringStartMonth() : string {
    return this.dateToString(new Date(this.date.getFullYear(), this.date.getMonth(), 2))
  }

  public getStringEndMonth() : string {
    return this.dateToString(new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1))
  }

  public convertDateFormat(dateInput: Date): string {
    const tempDate: Date = new Date(dateInput.toString())
    return tempDate.toLocaleDateString()
  }
}
