import { Injectable } from '@angular/core';
import { DivisionEnum } from 'src/app/models/dataStructure/DivisionEnum';
import { SeasonRankEnum } from 'src/app/models/dataStructure/SeasonRankEnum';
import { DivisionDictionary } from 'src/app/hardcodedData/DivisionDictionary';
import { SeasonRankDictionary } from 'src/app/hardcodedData/SeasonRankDictionary';

@Injectable({
  providedIn: 'root'
})
export class OrderImageService {

  constructor() { }

  getOrderImageName(division: DivisionEnum, seasonRank: SeasonRankEnum) {
    const seasonRankModel = SeasonRankDictionary.getByEnum(seasonRank);
    const path = 'assets/images/division/';
    if (seasonRank == SeasonRankEnum.Unranked) {
      return path + seasonRankModel.name + '.png';
    }

    const divisionModel = DivisionDictionary.getByEnum(division);
    return path + seasonRankModel.name + '_' + divisionModel.name + '.png';
  }

}
