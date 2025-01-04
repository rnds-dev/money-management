import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    standalone: false
})
export class DropdownComponent {
  @Input() title: string = "Title"
  @Input() list: Array<any> = []

  // shown: EventEmitter<boolean> = new EventEmitter<boolean>(false)

  selectedItems: Array<string> = []
  @Output() sendArrayToParent = new EventEmitter<any[]>();
  
  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.selectedItems.push(event.target.value)
    } else {
      const i = this.selectedItems.indexOf(event.target.value, 0)
      if (i > -1) {
        this.selectedItems.splice(i, 1)
      }
    }
    this.sendArrayToParent.emit(this.selectedItems)
    
    // const selectedItems = []
    // if (event.target.checked) {
    //   selectedItems.push(new FormControl(event.target.value))
    // } else {
    //   const index = selectedItems.controls
    //   .findIndex(x => x.value === event.target.value)
    //   selectedItems.removeAt(index)
    // }
  }
}
