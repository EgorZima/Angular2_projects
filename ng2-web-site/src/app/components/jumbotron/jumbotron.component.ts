import { Component } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html'
})
export class JumbotronComponent {
    jbtHead = 'Hello world';
    jbtText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information';
    jbtBtnText = 'Learn more';
    jbtBtnUrl = 'http://google.com'
}
