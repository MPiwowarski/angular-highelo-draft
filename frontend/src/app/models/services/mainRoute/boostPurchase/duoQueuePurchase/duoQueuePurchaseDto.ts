import { DivisionModel } from 'src/app/models/dataStructure/DivisionModel';
import { SeasonRankModel } from 'src/app/models/dataStructure/SeasonRankModel';

export class DuoQueuePurchaseDto {
    constructor(public divisionModel: DivisionModel, public seasonRankModel: SeasonRankModel, public winsCount: number) {

    }

}
