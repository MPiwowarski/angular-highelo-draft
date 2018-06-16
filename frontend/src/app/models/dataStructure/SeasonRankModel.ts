import { SeasonRankEnum } from './SeasonRankEnum';

export class SeasonRankModel {
    constructor(public seasonRank: SeasonRankEnum) {

    }

    get name(): string {
        return SeasonRankEnum[this.seasonRank];
    }
}
