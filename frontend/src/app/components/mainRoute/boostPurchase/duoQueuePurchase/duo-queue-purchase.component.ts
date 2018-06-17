import { Component, OnInit } from '@angular/core';
import { DivisionDictionary } from 'src/app/hardcodedData/DivisionDictionary';
import { SeasonRankDictionary } from 'src/app/hardcodedData/SeasonRankDictionary';
import { SeasonRankModel } from 'src/app/models/dataStructure/SeasonRankModel';
import { DivisionModel } from 'src/app/models/dataStructure/DivisionModel';
import { DuoQueuePurchaseService } from 'src/app/services/mainRoute/boostPurchase/duoQueuePurchase/duo-queue-purchase.service';
import { DuoQueuePurchaseDto } from 'src/app/models/services/mainRoute/boostPurchase/duoQueuePurchase/duoQueuePurchaseDto';
import { OrderImageService } from 'src/app/services/common/orderImage/order-image.service';
import { SeasonRankEnum } from '../../../../models/dataStructure/SeasonRankEnum';

@Component({
  selector: 'app-duo-queue-purchase',
  templateUrl: './duo-queue-purchase.component.html',
  styleUrls: ['./duo-queue-purchase.component.scss']
})
export class DuoQueuePurchaseComponent implements OnInit {
  public sliderValue = 1;
  public orderImageSrc: string;

  public seasonRanks: SeasonRankModel[];
  public selectedRank: SeasonRankModel;

  public divisions: DivisionModel[];
  public selectedDivision: DivisionModel;

  constructor(
    private duoQueuePurchaseService: DuoQueuePurchaseService,
    private orderImageService: OrderImageService,
  ) {

  }

  ngOnInit(): void {
    this.seasonRanks = SeasonRankDictionary.get();
    this.selectedRank = this.seasonRanks[0];
    this.divisions = DivisionDictionary.get();
    this.selectedDivision = this.divisions[0];
    this.orderImageSrc= this.orderImageService.getOrderImageName(null, SeasonRankEnum.Unranked);
  }

  onPriceSliderChange(value) {
    this.sliderValue = value;
    this.onOrderChange();
  }

  seasonRankOnChange(seasonRank: SeasonRankModel) {
    this.selectedRank = seasonRank;
    this.orderImageSrc= this.orderImageService.getOrderImageName(this.selectedDivision.division, seasonRank.seasonRank);
    this.onOrderChange();
  }

  divisionOnChange(division: DivisionModel) {
    this.selectedDivision = division;
    this.orderImageSrc= this.orderImageService.getOrderImageName(division.division, this.selectedRank.seasonRank);
    this.onOrderChange();
  }

  private onOrderChange() {
    let orderDto = new DuoQueuePurchaseDto(this.selectedDivision, this.selectedRank, this.sliderValue);
    this.duoQueuePurchaseService.onOrderChanged(orderDto);
  }

}
