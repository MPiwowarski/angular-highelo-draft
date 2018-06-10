import { DivisionEnum } from './DivisionEnum';

export class DivisionModel {
    constructor(public Division: DivisionEnum, public Description: string) {

    }

    get Name(): string {
        return DivisionEnum[this.Division];
    }
}
