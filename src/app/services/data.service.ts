import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://money-management/'

  constructor(
    // @Inject(String) private link: string,
    private http: HttpClient) {
    }

  getAll(link: string) {    
    return this.http.get<any>(this.url + link)
  }

  get(link: string, id: number) {
    return this.http.get<any>(this.url + link + "/" + id)
  }

  add(link: string, body: any) {
    return this.http.post(this.url + link, body).subscribe(body => {
      console.log('Ответ сервера: ', body);
    })
  }

  delete(link: string, id: number) {
    return this.http.delete(this.url + link + "/" + id).subscribe(body => {
      console.log('Ответ сервера: ', body);
    })
  }

  update(link: string, id: number, body: any) {
    this.http.patch(this.url + link + "/" + id, body).subscribe(body => {
      console.log('Ответ сервера: ', body);
    })
  }
}
