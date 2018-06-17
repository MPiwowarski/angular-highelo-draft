import { DivisionEnum } from './DivisionEnum';

export class DivisionModel {
    constructor(public division: DivisionEnum, public description: string) {

    }

    get name(): string {
        return DivisionEnum[this.division];
    }
}
