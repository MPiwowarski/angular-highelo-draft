import { Component } from '@angular/core';
let OrderImages = require('../../../../partialViews/order-image.html');

@Component({
  selector: 'app-duo-queue-purchase',
  templateUrl: './duo-queue-purchase.component.html',
  styleUrls: ['./duo-queue-purchase.component.scss']
})
export class DuoQueuePurchaseComponent  {
  public sliderVal = 1;
  public orderImages: string;
  public orderImage: string;

  constructor() {
    this.orderImages = OrderImages;
  }

  ngAfterViewInit() {
    var unrankedImageSrc = (<HTMLImageElement>document.getElementsByClassName('Unranked_I')[0]).src;
    console.log(unrankedImageSrc);
    this.orderImage = "<image src=\"" + unrankedImageSrc + "\" />";
    console.log(this.orderImage);
  }

  onPriceSliderChange(val) {
    this.sliderVal = val;
  }

}
