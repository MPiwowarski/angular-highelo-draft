import { LeagueModel } from '../models/dataStructure/LeagueModel';
import { LeagueEnum } from '../models/dataStructure/LeagueEnum';
import { SeasonRankEnum } from '../models/dataStructure/SeasonRankEnum';

export class LeagueDictionary {

    public static get(): LeagueModel[] {
        const result = [];
        for (const item in LeagueEnum) {
            if (!isNaN(Number(item))) {
                result.push(new LeagueModel(Number(item)));
            }
        }
        return result;
    }
}
