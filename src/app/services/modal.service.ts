import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  data:any
  isVisible = false

  open(data?: any) {
    this.isVisible = true
    this.data = data
  }
  close() {
    this.isVisible = false
  }
}
