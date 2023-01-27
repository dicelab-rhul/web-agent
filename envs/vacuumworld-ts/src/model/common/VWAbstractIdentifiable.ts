import { VWExistenceChecker } from '../utils/VWExistenceChecker';
import { VWIdentifiable } from './VWIdentifiable';
import { v4 as uuidv4 } from "uuid";

export class VWAbstractIdentifiable implements VWIdentifiable {
    private id: string;

    public constructor() {
        this.id = uuidv4();
    }

    public getID(): string {
        return this.id;
    }

    public equals(other: object): boolean {
        if (!VWExistenceChecker.exists(other)) {
            return false;
        }
        else if (this === other) {
            return true;
        }
        else if (!(other instanceof VWAbstractIdentifiable)) {
            return false;
        }
        else {
            return this.id === other.id;
        }
    }
}
