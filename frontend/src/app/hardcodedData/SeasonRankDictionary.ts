import { SeasonRankModel } from '../models/dataStructure/SeasonRankModel';
import { SeasonRankEnum } from '../models/dataStructure/SeasonRankEnum';

export class SeasonRankDictionary {

    public static get(): SeasonRankModel[] {
        const result = [];
        for (const item in SeasonRankEnum) {
            if (!isNaN(Number(item))) {
                const newLeague = new SeasonRankModel(Number(item));
                result.push(newLeague);
            }
        }
        return result;
    }

    public static getByEnum(seasonRank: SeasonRankEnum): SeasonRankModel {
        return this.get().filter(x => x.seasonRank === seasonRank)[0];
    }

}
