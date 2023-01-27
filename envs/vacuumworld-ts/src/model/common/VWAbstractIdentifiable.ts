import { VWExistenceChecker } from '../utils/VWExistenceChecker';
import { VWIdentifiable } from './VWIdentifiable';

const uuid = require("uuid"); // TODO: Replace with import.

export class VWAbstractIdentifiable implements VWIdentifiable {
    private id: string;

    public constructor() {
        this.id = uuid.v4();
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
