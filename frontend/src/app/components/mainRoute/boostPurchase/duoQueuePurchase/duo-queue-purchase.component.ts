import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeasonRankDictionary } from 'src/app/hardcodedData/SeasonRankDictionary';
import { LeagueModel } from '../../../../models/dataStructure/LeagueModel';
import { SeasonRankEnum } from '../../../../models/dataStructure/SeasonRankEnum';
import { SeasonRankModel } from 'src/app/models/dataStructure/SeasonRankModel';
const OrderImages = require('../../../../partialViews/order-image.html');

@Component({
  selector: 'app-duo-queue-purchase',
  templateUrl: './duo-queue-purchase.component.html',
  styleUrls: ['./duo-queue-purchase.component.scss']
})
export class DuoQueuePurchaseComponent implements AfterViewInit, OnInit {
  public sliderVal = 1;
  public orderImages: string;
  public orderImage: string;

  public seasonRanks: SeasonRankModel[];
  public selectedSeasonRank: SeasonRankModel;

  ngOnInit(): void {
    this.orderImages = OrderImages;
    this.seasonRanks = SeasonRankDictionary.get();
  }

  ngAfterViewInit() {
    const unrankedImageSrc = (<HTMLImageElement>document.getElementsByClassName('Unranked_I')[0]).src;
    this.orderImage = '<image src=\'' + unrankedImageSrc + '\' />';
  }

  onPriceSliderChange(val) {
    this.sliderVal = val;
  }

}
