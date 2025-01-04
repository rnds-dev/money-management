import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://money-management-server/'

  constructor(private http: HttpClient) { }

  public getAll(link: string) {
    return this.http.get<any>(this.url + link)
  }

  public get(link: string, id: number) {
    return this.http.get<any>(this.url + link + "/" + id)
  }

  public add(link: string, body: any) {
    return this.http.post(this.url + link, body).subscribe(body => {
      console.log('Response: ', body);
    })
  }

  public delete(link: string, id: number) {
    return this.http.delete(this.url + link + "/" + id).subscribe(body => {
      console.log('Response: ', body);
    })
  }

  public update(link: string, id: number, body: any) {
    this.http.patch(this.url + link + "/" + id, body).subscribe(body => {
      console.log('Response: ', body);
    })
  }
}
