import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DivisionDictionary } from 'src/app/hardcodedData/DivisionDictionary';
import { SeasonRankDictionary } from 'src/app/hardcodedData/SeasonRankDictionary';
import { SeasonRankModel } from 'src/app/models/dataStructure/SeasonRankModel';
import { DivisionModel } from 'src/app/models/dataStructure/DivisionModel';
import { DuoQueuePurchaseService } from 'src/app/services/mainRoute/boostPurchase/duoQueuePurchase/duo-queue-purchase.service';
import { DuoQueuePurchaseDto } from 'src/app/models/services/mainRoute/boostPurchase/duoQueuePurchase/duoQueuePurchaseDto';

@Component({
  selector: 'app-duo-queue-purchase',
  templateUrl: './duo-queue-purchase.component.html',
  styleUrls: ['./duo-queue-purchase.component.scss']
})
export class DuoQueuePurchaseComponent implements AfterViewInit, OnInit {
  public sliderValue = 1;
  public orderImage: string;

  public seasonRanks: SeasonRankModel[];
  public selectedRank: SeasonRankModel;

  public divisions: DivisionModel[];
  public selectedDivision: DivisionModel;

  constructor(private duoQueuePurchaseService: DuoQueuePurchaseService) {

  }

  ngOnInit(): void {
    this.seasonRanks = SeasonRankDictionary.get();
    this.selectedRank = this.seasonRanks[0];
    this.divisions = DivisionDictionary.get();
    this.selectedDivision = this.divisions[0];
    console.log(this.divisions);
    console.log(this.selectedDivision);
  }

  ngAfterViewInit() {
    const unrankedImageSrc = (<HTMLImageElement>document.getElementsByClassName('Unranked_I')[0]).src;
    this.orderImage = '<image src=\'' + unrankedImageSrc + '\' />';
  }

  onPriceSliderChange(value) {
    this.sliderValue = value;
    this.onOrderChange();
  }

  seasonRankOnChange(value) {
    this.selectedRank = value;
    this.onOrderChange();
  }

  divisionOnChange(value) {
    this.selectedDivision = value;
    this.onOrderChange();
  }

  private onOrderChange() {
    let orderDto = new DuoQueuePurchaseDto(this.selectedDivision, this.selectedRank, this.sliderValue);
    this.duoQueuePurchaseService.onOrderChanged(orderDto);
  }

}
