import { SeasonRankEnum } from './SeasonRankEnum';

export class SeasonRankModel {
    constructor(public SeasonRank: SeasonRankEnum) {

    }

    get Name(): string {
        return SeasonRankEnum[this.SeasonRank];
    }
}
