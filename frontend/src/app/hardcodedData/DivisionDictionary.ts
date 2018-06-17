import { DivisionModel } from '../models/dataStructure/DivisionModel';
import { DivisionEnum } from '../models/dataStructure/DivisionEnum';

export class DivisionDictionary {

    public static get(): DivisionModel[] {
        const result = [];
        for (const item in DivisionEnum) {
            if (!isNaN(Number(item))) {
                result.push(new DivisionModel(Number(item), 'Division ' + DivisionEnum[item]));
            }
        }
        return result;
    }

    public static getByEnum(division: DivisionEnum): DivisionModel {
        return this.get().filter(x => x.division === division)[0];
    }

}
