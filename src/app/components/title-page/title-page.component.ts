import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title-page',
    templateUrl: './title-page.component.html',
    standalone: false
})
export class TitlePageComponent {
  @Input()
  title: string = "Title"
}
