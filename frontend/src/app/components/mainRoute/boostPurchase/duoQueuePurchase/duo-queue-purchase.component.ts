import { Component } from '@angular/core';

@Component({
  selector: 'app-duo-queue-purchase',
  templateUrl: './duo-queue-purchase.component.html',
  styleUrls: ['./duo-queue-purchase.component.scss']
})
export class DuoQueuePurchaseComponent {

  constructor() { }

  onChangeAchievement(eventStr: string, eRef) {

     alert('eventStr ' + eventStr)

  }
}
