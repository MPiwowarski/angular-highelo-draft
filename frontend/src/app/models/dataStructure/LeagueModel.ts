import { LeagueEnum } from './LeagueEnum';

export class LeagueModel {
    constructor(public League: LeagueEnum) {

    }

    get Name(): string {
        return LeagueEnum[this.League];
    }
}
