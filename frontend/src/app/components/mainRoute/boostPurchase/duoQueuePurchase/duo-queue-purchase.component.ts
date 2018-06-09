import { Component } from '@angular/core';
import OrderImages from '../../../../partialViews/order-image.html';

@Component({
  selector: 'app-duo-queue-purchase',
  templateUrl: './duo-queue-purchase.component.html',
  styleUrls: ['./duo-queue-purchase.component.scss']
})
export class DuoQueuePurchaseComponent {
  public sliderVal = 1;
  constructor() { }

  public orderImages = OrderImages;

  onPriceSliderChange(val) {
    this.sliderVal = val;
  }

}
